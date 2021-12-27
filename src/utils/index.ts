import { Contract } from "@ethersproject/contracts";
import { AddressZero } from "@ethersproject/constants";
import { getAddress } from "@ethersproject/address";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { SCAN_URLS } from "../config";
import { ChainId } from "config/constants/tokens";
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}
export function getBscScanLink(
  data: string | number,
  type: "transaction" | "token" | "address" | "block" | "countdown",
  chainId: ChainId,
): string {
  switch (type) {
    case "transaction": {
      return `${SCAN_URLS[chainId]}/tx/${data}`;
    }
    case "token": {
      return `${SCAN_URLS[chainId]}/token/${data}`;
    }
    case "block": {
      return `${SCAN_URLS[chainId]}/block/${data}`;
    }
    case "countdown": {
      return `${SCAN_URLS[chainId]}/block/countdown/${data}`;
    }
    default: {
      return `${SCAN_URLS[chainId]}/address/${data}`;
    }
  }
}

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any);
}
