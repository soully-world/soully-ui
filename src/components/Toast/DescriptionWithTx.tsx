import React from "react";
import { Link, Text } from "uikit";
import { getBscScanLink } from "utils";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useTranslation } from "contexts/Localization";
import truncateHash from "utils/truncateHash";

interface DescriptionWithTxProps {
  description?: string;
  txHash?: string;
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React();
  console.log(111);
  return (
    <>
      {typeof children === "string" ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external href={getBscScanLink(txHash, "transaction", chainId)} color="text" style={{ opacity: 0.6 }}>
          View on Scan: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  );
};

export default DescriptionWithTx;
