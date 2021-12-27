import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS } from "config";
import { chainId } from "config/constants/tokens";
import { useSollyContract } from "hooks/useContract";
const Trade = () => {
  const [vipSaleReserved, setVipSaleReserved] = useState<number>();
  const contract = useSollyContract(CONTRACT_ADDRESS[chainId]);
  const { account } = useWeb3React();
  return <div>222</div>;
};
export default Trade;
