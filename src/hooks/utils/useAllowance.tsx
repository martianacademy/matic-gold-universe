import { useCall } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";
import { formatEther, formatUnits } from "ethers/lib/utils";

export const useAllowance = (
  contractAddress: string,
  contractInterface: Contract,
  contractDecimals: number,
  ownerAddress: string | undefined,
  spenderAddress: string
): BigNumber | undefined => {
  const { value, error } =
    useCall(
      contractAddress && {
        contract: contractInterface,
        method: "allowance",
        args: [ownerAddress, spenderAddress],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  const formattedValue = value
    ? Number(formatUnits(value?.[0], contractDecimals))
    : 0;

  return value?.[0];
};
