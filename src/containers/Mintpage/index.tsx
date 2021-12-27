import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS } from "config";
import { chainId } from "config/constants/tokens";
import { useSollyContract } from "hooks/useContract";
import { CONTRACT_STATE, MAX_Soully, preLink } from "appConfig/index";
import BigNumber from "bignumber.js";
import { BigNumber as BN } from "@ethersproject/bignumber";
import { formatUnits, parseEther } from "@ethersproject/units";
import useToast from "hooks/useToast";
import { ToastDescriptionWithTx } from "components/Toast";
import { useBalance } from "hooks/useBalance";
import { Button, Flex, Heading } from "uikit";

import {
  MintpageWrapDiv,
  MintpageBtn,
  MintpageContextText,
  MintpageInnerDiv,
  MintpageTitle,
  MintpageSubTitle,
} from "./Mintpage";

const Mintpage = () => {
  const { toastSuccess, toastError } = useToast();
  const contract = useSollyContract(CONTRACT_ADDRESS[chainId]);
  const balance: number = useBalance();
  const [vipSaleReserved, setVipSaleReserved] = useState<number>();
  const [state, setState] = useState<CONTRACT_STATE>(CONTRACT_STATE.paused);
  const [maxPurchase, setMaxPurchase] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [totalCost, setTotalCost] = useState(0);
  const [count, setCount] = useState<number>(1); // 要mint的个数
  const { account } = useWeb3React();

  const handleUpdateState = useCallback(() => {
    contract?.totalSupply().then((total: BN) => {
      // 总量是多少
      setTotal(total.toNumber());
      if (total.gte(MAX_Soully)) {
        // 总量已被领取完
        setState(CONTRACT_STATE.finish);
      }
    });
    // 状态
    contract.saleState().then((_state: BN) => {
      setState(_state.toNumber());
    });

    // 单独取会有问题，所以在回调里
    contract?.price().then((_price: BN) => {
      // 当前nft价格
      setPrice(Number(formatUnits(_price)));
    });

    contract?.vipSaleReserved(account).then((reserved: BN) => {
      // vip用户能够领取多少个
      setVipSaleReserved(reserved.toNumber());
    });

    contract?.maxPurchase().then((_maxPurchase: BN) => {
      // 非vip单次能够领取个数
      setMaxPurchase(_maxPurchase.toNumber());
    });
  }, [contract]);
  useEffect(() => {
    if (contract) {
      handleUpdateState();
    }
  }, [contract]);
  useEffect(() => {
    let _cost = 0;
    _cost = new BigNumber(count).times(price || 0).toNumber();
    setTotalCost(_cost);
  }, [count, price]);

  // mint
  const handleMint = useCallback(() => {
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
          toastError("No permission!");
          return false;
        }
      }
    } else {
      toastError("The contract has not yet opened, so stay tuned!");
      return false;
    }
  }, [totalCost, account]);
  const preSaleMint = useCallback(() => {
    contract
      .preSaleMint(count, { from: account, value: parseEther(`${totalCost}`) })
      .then((result) => {
        toastSuccess("mint successful!", <ToastDescriptionWithTx txHash={result} />);
      })
      .catch((err) => {
        toastError(err?.data?.message || "Mint Error!");
      });
  }, [totalCost, account]);
  const mint = useCallback(() => {
    contract
      .mint(account, count, { from: account, value: parseEther(`${totalCost}`) })
      .then((result) => {
        console.log(result);
        if (result && result.hash) {
          toastSuccess("mint successful!", <ToastDescriptionWithTx txHash={`${result.hash}`} />);
        } else {
          toastSuccess("mint successful!");
        }
      })
      .catch((err) => {
        toastError(err?.data?.message || "Mint Error!");
      });
  }, [totalCost, account]);
  console.log({ balance, vipSaleReserved, state, maxPurchase, total, price, totalCost, count });
  return (
    <MintpageWrapDiv preLink={preLink}>
      <MintpageInnerDiv>
        <div>
          <Heading>Mint IS LIVE</Heading>
          <Heading>Time to mint your soully today :)</Heading>
          <Heading>Mint Rules:</Heading>
          <MintpageContextText> Connect your wallet with MetaMask </MintpageContextText>
          <MintpageContextText>Select your Mint Quantity </MintpageContextText>
          <MintpageContextText>Click on the button to mint your Soully! </MintpageContextText>
          <MintpageContextText>Max 10 per transaction </MintpageContextText>
          <MintpageContextText>Max 20 per wallet </MintpageContextText>
          <MintpageContextText>No Bonding Curves </MintpageContextText>
        </div>
        <div>
          MINT PRICE: {price} ETH
          <div className="line_bg">
            <i
              style={{
                width: "40%",
              }}
            ></i>
          </div>
          <h4>
            {total} of {MAX_Soully} minted
          </h4>
          <Flex>
            <h4>TOTAL COST</h4>
            <h3>
              <i>{totalCost} </i>ETH
            </h3>
          </Flex>
          <h5>MINT QTY: {count}</h5>
          <Flex>
            <i
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </i>
            <Button onClick={handleMint}>Mint</Button>
            <i
              onClick={() => {
                if (state === 2) {
                  if (count < maxPurchase) {
                    setCount(count + 1);
                  }
                } else if (state === 1) {
                  if (count < vipSaleReserved) {
                    setCount(count + 1);
                  }
                }
              }}
            >
              +
            </i>
          </Flex>
        </div>
      </MintpageInnerDiv>
    </MintpageWrapDiv>
  );
};
export default Mintpage;
