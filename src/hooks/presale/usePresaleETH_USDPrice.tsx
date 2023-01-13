import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import { useCurrentNetwork } from "../../constants/Data";

export const usePresaleETH_USDPrice = (): BigNumber | undefined => {
  const currentNetwork = useCurrentNetwork();

  const { value, error } =
    useCall(
      currentNetwork?.PresaleAddress && {
        contract: currentNetwork?.PresaleInterface,
        method: "getETH_USDPrice",
        args: [],
      }
    ) ?? {};
  if (error) {
    console.error("usePresaleETH_USDPrice", error.message);
    return undefined;
  }

  // const valueFormatted = value ? Number(formatEther(value?.[0])) : 0;

  return value?.[0];
};
