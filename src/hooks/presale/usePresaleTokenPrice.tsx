import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import React from "react";
import { useCurrentNetwork } from "../../constants/Data";

export const usePresaleTokenPrice = (): BigNumber | undefined => {
  const currentNetwork = useCurrentNetwork();
  const { value, error } =
    useCall(
      currentNetwork?.PresaleAddress && {
        contract: currentNetwork?.PresaleInterface,
        method: "getPricePerUSD",
        args: [],
      }
    ) ?? {};
  if (error) {
    console.error("usePresaleTokenPrice", error.message);
    return undefined;
  }

  return value?.[0];
};
