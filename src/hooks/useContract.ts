import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";

import Solly_ABI from "config/abi/Solly.json";
import { getContract } from "../utils";

export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useSollyContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, Solly_ABI, withSignerIfPossible);
}
