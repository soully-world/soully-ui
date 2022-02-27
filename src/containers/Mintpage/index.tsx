import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS } from "config";
import { chainId as adminChainId } from "config/constants/tokens";
import { useSollyContract } from "hooks/useContract";
import { CONTRACT_STATE, MAX_Soully, preLink } from "appConfig/index";
import BigNumber from "bignumber.js";
import { BigNumber as BN } from "@ethersproject/bignumber";
import { formatUnits, parseEther } from "@ethersproject/units";
import useToast from "hooks/useToast";
import { ToastDescriptionWithTx } from "components/Toast";
import { useBalance } from "hooks/useBalance";
import { Button } from "uikit";

import {
  MintpageWrapDiv,
  MintpageBtn,
  MintpageContextText,
  MintpageInnerDiv,
  MintpageTitle,
  MintpageSubTitle,
  MintpageContextTitle,
  MintpageInnerDivFl,
  MintpageInnerDivFr,
  CostStyled,
} from "./Mintpage";

const Mintpage = () => {
  const { toastSuccess, toastError, toastWarning } = useToast();
  const contract = useSollyContract(CONTRACT_ADDRESS[adminChainId]);
  const balance: number = useBalance();
  const [vipSaleReserved, setVipSaleReserved] = useState<number>();
  const [vipAlreadySaleReserved, setVipAlreadySaleReserved] = useState<number>(0);
  const [state, setState] = useState<CONTRACT_STATE>(CONTRACT_STATE.paused);
  const [maxPurchase] = useState<number>(5);
  const [total, setTotal] = useState<number>(0);
  const [price, setPrice] = useState<number>(0.06);
  const [totalCost, setTotalCost] = useState(0.06);
  const [count, setCount] = useState<number>(5); // 要mint的个数
  const { account, chainId } = useWeb3React();
  const [connect, setConnect] = useState(false);
  const handleUpdateState = useCallback(() => {
    if (!contract?.totalSupply) {
      setConnect(false);
    }
    contract?.totalSupply().then((total: BN) => {
      // 总量是多少
      setTotal(total.toNumber());
      if (total.gte(MAX_Soully)) {
        // 总量已被领取完
        setState(CONTRACT_STATE.finish);
      }
    });
    // 状态
    contract?.saleState().then((_state: BN) => {
      setState(_state.toNumber());

      contract.vipSaleReserved(account).then((reserved: BN) => {
        // vip用户能够领取多少个
        setVipSaleReserved(reserved.toNumber());
        // 如果可领取数为 < maxPurchase
        if (reserved.toNumber() < maxPurchase) {
          setCount(reserved.toNumber());
        }

        contract?.walletOfOwner(account).then((data: BN[]) => {
          if (data && data.length) {
            if (_state.toNumber() === 1) {
              setCount(reserved.toNumber() - data.length);
              setVipSaleReserved(reserved.toNumber() - data.length);
            }
            setVipAlreadySaleReserved(data.length);
          }
        });
      });
    });

    // 单独取会有问题，所以在回调里
    contract?.price().then((_price: BN) => {
      // 当前nft价格
      setPrice(Number(formatUnits(_price)));
    });

    // contract?.maxPurchase().then((_maxPurchase: BN) => {
    //   // 非vip单次能够领取个数
    //   setMaxPurchase(_maxPurchase.toNumber());
    // });
  }, [contract]);
  useEffect(() => {
    // console.log(adminChainId, chainId);
    if (adminChainId !== chainId) {
      setConnect(false);
    } else {
      // console.log("eeeee");
      setConnect(true);
      if (contract) {
        handleUpdateState();
      }
    }
  }, [contract, chainId, connect]);
  useEffect(() => {
    let _cost = 0;
    _cost = new BigNumber(count).times(price || 0).toNumber();
    setTotalCost(_cost);
  }, [count, price]);

  // mint
  const handleMint = useCallback(() => {
    if (!connect) {
      toastError("Please change network to Ethereum.");
      return false;
    }
    if (!state) {
      toastError("The contract has not yet opened, so stay tuned!");
      return false;
    }
    if (balance * Math.pow(10, 18) < price * count * Math.pow(10, 18)) {
      toastError(`Insufficient balance, current balance is ${balance}, NFT price：${price}`);
      return false;
    }
    if (+count > maxPurchase || count < 0) {
      toastError(`You can currently purchase ${maxPurchase} ETH`);
      return false;
    }
    if (state > 0) {
      if (state > 1) {
        mint();
      } else {
        if (vipSaleReserved > 0) {
          if (vipSaleReserved >= count) {
            preSaleMint();
          } else {
            toastError(`You can currently purchase ${vipSaleReserved} ETH`);
          }
        } else {
          // todo 已经有5个  在预售
          console.log(vipAlreadySaleReserved, vipSaleReserved);
          if (vipAlreadySaleReserved) {
            toastError("Sorry, you’ve reached the maximum limit!");
          } else {
            toastError("Sorry, you aren’t on the whitelist!");
          }
          return false;
        }
      }
    } else {
      toastError("The contract has not yet opened, so stay tuned!");
      return false;
    }
  }, [totalCost, account, balance, count, price, vipSaleReserved, state, connect]);
  const preSaleMint = useCallback(() => {
    contract
      .preSaleMint(count, { from: account, value: parseEther(`${totalCost}`) })
      .then((result) => {
        if (result) {
          toastSuccess("Congrats! Mint successfully!", <ToastDescriptionWithTx txHash={result} />);
        }
      })
      .catch((err) => {
        toastError(err?.data?.message || "Mint Error!");
      });
  }, [totalCost, account]);
  const mint = useCallback(() => {
    contract
      .mint(account, count, { from: account, value: parseEther(`${totalCost.toFixed(2)}`) })
      .then((result) => {
        if (result && result.hash) {
          toastSuccess("Congrats! Mint successfully!", <ToastDescriptionWithTx txHash={`${result.hash}`} />);
        } else {
          toastSuccess("Congrats! Mint successfully!");
        }
      })
      .catch((err) => {
        if ((err?.data?.message || "").toLowerCase().indexOf("token already minted") > -1) {
          mint();
        }
        toastError(err?.data?.message || "Mint Error!");
      });
  }, [totalCost, account]);
  console.log(vipAlreadySaleReserved);
  return (
    <MintpageWrapDiv preLink={preLink}>
      <MintpageInnerDiv>
        <MintpageInnerDivFl>
          <MintpageTitle>MINT IS LIVE</MintpageTitle>
          <MintpageSubTitle>Time to mint your soully today :)</MintpageSubTitle>
          <div className="inner-Rule">
            <MintpageContextTitle>Mint Rules:</MintpageContextTitle>
            <MintpageContextText>1. Connect your wallet with MetaMask </MintpageContextText>
            <MintpageContextText>2. Select your Mint Quantity </MintpageContextText>
            <MintpageContextText>3. Click on the button to mint your Soully! </MintpageContextText>
            <MintpageContextText>4. Max 5 per transaction </MintpageContextText>
            <MintpageContextText>5. No Bonding Curves </MintpageContextText>
            <MintpageContextText>6. Good luck! </MintpageContextText>
          </div>
        </MintpageInnerDivFl>
        <MintpageInnerDivFr>
          <h2>MINT PRICE: {price.toLocaleString()} ETH </h2>
          <div className="line_bg">
            <i
              style={{
                width: `${(total / MAX_Soully) * 100}%`,
              }}
            ></i>
          </div>
          <h4>
            {total.toLocaleString()} of {MAX_Soully.toLocaleString()} minted
          </h4>
          <CostStyled>
            <h4>TOTAL COST</h4>
            <h3>
              <i>{totalCost.toFixed(2)} </i>ETH
            </h3>
          </CostStyled>
          <h5>MINT QTY: {count}</h5>
          <MintpageBtn>
            <i
              onClick={() => {
                if (!account) {
                  toastWarning("Please connect the wallet first");
                  return;
                }
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              <em>-</em>
            </i>
            <Button onClick={handleMint}>
              <em> {!connect ? "CONNECT" : "Mint"}</em>
            </Button>
            <i
              onClick={() => {
                if (!account) {
                  toastWarning("Please connect the wallet first");
                  return;
                }
                if (state === 2) {
                  if (count < maxPurchase) {
                    setCount(count + 1);
                  } else {
                    toastWarning("Sorry, you’ve reached the maximum limit!");
                  }
                } else if (state === 1) {
                  if (count < vipSaleReserved) {
                    setCount(count + 1);
                  } else {
                    if (vipAlreadySaleReserved) {
                      toastWarning("Sorry, you’ve reached the maximum limit!");
                    } else {
                      toastWarning("Sorry, you aren’t on the whitelist!");
                    }
                  }
                }
              }}
            >
              <em>+</em>
            </i>
          </MintpageBtn>
        </MintpageInnerDivFr>
      </MintpageInnerDiv>
      <div className="wrap-Rule">
        <MintpageContextTitle>Mint Rules:</MintpageContextTitle>
        <MintpageContextText>1. Connect your wallet with MetaMask </MintpageContextText>
        <MintpageContextText>2. Select your Mint Quantity </MintpageContextText>
        <MintpageContextText>3. Click on the button to mint your Soully! </MintpageContextText>
        <MintpageContextText>4. Max 10 per transaction </MintpageContextText>
        <MintpageContextText>5. Max 20 per wallet </MintpageContextText>
        <MintpageContextText>6. No Bonding Curves </MintpageContextText>
      </div>
    </MintpageWrapDiv>
  );
};
export default Mintpage;
