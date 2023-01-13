import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { AddressZero, useCurrentNetwork } from "../../constants/Data";

export type UserTotalBusinessType = {
  businessETH: BigNumber;
  businessUSD: BigNumber;
};

export type UserTotalBusinessNumberType = {
  businessETH: number;
  businessUSD: number;
};

export const useReferralUserTotalBusiness = (
  address: string | undefined
): UserTotalBusinessType | undefined => {
  const currentNetwork = useCurrentNetwork();
  const { value, error } =
    useCall(
      currentNetwork?.ReferralAddress && {
        contract: currentNetwork?.ReferralInterface,
        method: "getUserTotalBusiness",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error("useReferralUserTotalBusiness", error.message);
    return undefined;
  }

  return value;
};
