import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { AddressZero, useCurrentNetwork } from "../../constants/Data";

export type UserTotalIncomeType = {
  totalRewardPaidETH: BigNumber;
  totalRewardPaidUSD: BigNumber;
  totalRewardPaidStaking: BigNumber;
};

export const useUserTotalRewardPaid = (
  address: string | undefined
): UserTotalIncomeType | undefined => {
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
    console.error(error.message);
    return undefined;
  }

  const valueFormatted: UserTotalIncomeType | undefined = value
    ? {
        totalRewardPaidETH: value?.rewardPaidETH,
        totalRewardPaidStaking: value?.rewardPaidStaking,
        totalRewardPaidUSD: value?.rewardPaidUSD,
      }
    : undefined;

  return valueFormatted;
};
