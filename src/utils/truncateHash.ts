/**
 * Truncate a transaction or address hash
 */
const truncateHash = (address: string, startLength = 4, endLength = 4) => {
  console.log(address);
  if (address && address.length < 8) {
    return address;
  }
  return `${(address ?? "").substring(0, startLength)}...${(address ?? "").substring(
    (address ?? "").length - endLength,
  )}`;
};

export default truncateHash;
