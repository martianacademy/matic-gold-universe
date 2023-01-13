import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { AddressZero, useCurrentNetwork } from "../../constants/Data";

export type UserTotalRewardsBigNumberType = {
  rewardPaidETH: BigNumber;
  rewardPaidUSD: BigNumber;
  rewardPaidStaking: BigNumber;
};

export type UserTotalRewardsNumberType = {
  rewardPaidETH?: number;
  rewardPaidUSD?: number;
  rewardPaidStaking?: number;
};

export const useUserTotalRewardPaid = (
  address: string | undefined
): UserTotalRewardsBigNumberType | undefined => {
  const currentNetwork = useCurrentNetwork();
  const { value, error } =
    useCall(
      currentNetwork?.ReferralAddress && {
        contract: currentNetwork?.ReferralInterface,
        method: "getUserTotalRewardPaid",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error("useUserTotalRewardPaid", error.message);
    return undefined;
  }

  console.log(value);

  return value;
};
