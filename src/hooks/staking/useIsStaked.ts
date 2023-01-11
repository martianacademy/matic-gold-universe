import { useCall, useEthers } from "@usedapp/core";
import { useCurrentNetwork } from "../../constants";

export const useIsStaked = (
  address: string | undefined
): boolean | undefined => {
  const currentNetwork = useCurrentNetwork();
  const { value, error } =
    useCall(
      currentNetwork?.StakingAddress && {
        contract: currentNetwork?.StakingInterface,
        method: "isStaked",
        args: [address],
      }
    ) ?? {};

  if (error) {
    console.log(error);
    return undefined;
  }

  return value ? value?.[0] : false;
};
