import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS } from "config";
import { chainId } from "config/constants/tokens";
import { useSollyContract } from "hooks/useContract";
import { CONTRACT_STATE, MAX_Soully } from "appConfig/index";
import BigNumber from "bignumber.js";
import { BigNumber as BN } from "@ethersproject/bignumber";
import { formatUnits, parseEther } from "@ethersproject/units";
import useToast from "hooks/useToast";
import { ToastDescriptionWithTx } from "components/Toast";
import { useBalance } from "hooks/useBalance";
const Trade = () => {
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

  // const handleUpdateState = () => {
  //   contract?.totalSupply().then((total: BN) => {
  //     // 总量是多少
  //     setTotal(total.toNumber());
  //     if (total.gte(MAX_Soully)) {
  //       // 总量已被领取完
  //       setState(CONTRACT_STATE.finish);
  //     }
  //   });
  //   // 状态
  //   contract.saleState().then((state: BN) => {
  //     setState(state.toNumber());
  //   });

  //   // 单独取会有问题，所以在回调里
  //   contract?.price().then((_price: BN) => {
  //     // 当前nft价格
  //     setPrice(Number(formatUnits(_price)));
  //   });

  //   contract?.vipSaleReserved(account).then((reserved: BN) => {
  //     // vip用户能够领取多少个
  //     setVipSaleReserved(reserved.toNumber());
  //   });

  //   contract?.maxPurchase().then((_maxPurchase: BN) => {
  //     // 非vip单次能够领取个数
  //     setMaxPurchase(_maxPurchase.toNumber());
  //   });

  //   contract?.vipSaleReserved(account).then((reserved: BN) => {
  //     // vip用户能够领取多少个
  //     setVipSaleReserved(reserved.toNumber());
  //   });
  // };
  // useEffect(() => {
  //   if (contract) {
  //     handleUpdateState();
  //   }
  // }, [contract]);
  // useEffect(() => {
  //   let _cost = 0;
  //   let _count = count;
  //   if (vipSaleReserved > 0) {
  //     _cost += new BigNumber(vipSaleReserved || 0)
  //       .times(price || 0)
  //       .times(1 / 2)
  //       .toNumber();
  //     _count -= vipSaleReserved;
  //   }
  //   _cost = new BigNumber(_count)
  //     .times(price || 0)
  //     .plus(_cost || 0)
  //     .toNumber();
  //   setTotalCost(_cost);
  // }, [count, price]);

  // mint
  const handleMint = useCallback(() => {
    contract
      .mint(account, count, { from: account, value: parseEther(`${totalCost}`) })
      .then((result) => {
        // 0x014eecb78d4ce4eced79b033b7fbe89af05fd59ec27c6b2eb7c1c80fdbcf15cb
        toastSuccess("mint successful!", <ToastDescriptionWithTx txHash={result} />);
      })
      .catch((err) => {
        toastError(err?.data?.message || "Mint err");
      });
  }, [totalCost, account]);

  // console.log({ balance, vipSaleReserved, state, maxPurchase, total, price, totalCost, count });
  return (
    <div>
      222 <div onClick={handleMint}>ssss</div>
    </div>
  );
};
export default Trade;
