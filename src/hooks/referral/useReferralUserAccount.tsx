import { useCall } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { AddressZero, useCurrentNetwork } from "../../constants/Data";

export type UserAccountMapType = {
  referrerAddress: string;
  hasReferrer: boolean;
  referredAddresses: string[];
  referredCount: number;
  hasReferee: boolean;
  teamAddress: string[];
  teamCount: number;
  rewardPaidETH: BigNumber[];
  rewardPaidUSD: BigNumber[];
  rewardPaidStaking: BigNumber[];
  rewardPaidTimeETH: BigNumber[];
  rewardPaidTimeUSD: BigNumber[];
  rewardPaidTimeStaking: BigNumber[];
  totalBusinessETH: BigNumber;
  totalBusinessUSD: BigNumber;
};

export const useReferralUserAccount = (
  address: string | undefined
): UserAccountMapType | undefined => {
  const currentNetwork = useCurrentNetwork();
  const { value, error } =
    useCall(
      currentNetwork?.ReferralAddress && {
        contract: currentNetwork?.ReferralInterface,
        method: "getUserAccount",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  const valueFormatted: UserAccountMapType | undefined = value
    ? {
        referrerAddress: value?.[0].referrer,
        hasReferrer: value?.[0].referrer !== AddressZero ? true : false,
        referredAddresses: value?.[0].referredAddresses,
        referredCount: value?.[0].referredAddresses.length,
        hasReferee: value?.[0].referredAddresses.length > 0 ? true : false,
        teamAddress: value?.[0].teamAddress,
        teamCount: value?.[0].teamAddress.length,
        rewardPaidETH: value?.[0].rewardPaidETH,

        rewardPaidUSD: value?.[0].rewardPaidUSD,

        rewardPaidStaking: value?.[0].rewardPaidStaking,

        rewardPaidTimeETH: value?.[0].rewardPaidTimeETH,
        rewardPaidTimeUSD: value?.[0].rewardPaidTimeUSD,
        rewardPaidTimeStaking: value?.[0].rewardPaidTimeStaking,
        totalBusinessETH: value?.[0].totalBusinessETH,
        totalBusinessUSD: value?.[0].totalBusinessUSD,
      }
    : undefined;

  return valueFormatted;
};
