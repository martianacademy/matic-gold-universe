import { useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { useCurrentNetwork } from "../../../../constants";
import {
  UserTotalRewardsBigNumberType,
  useUserTotalRewardPaid,
} from "../../../../hooks/referral";
import { ItemContainer } from "../ItemContainer";
import { IncomeContainer } from "./IncomeContainer";

export const ReferralIncomeNative = () => {
  const { account } = useEthers();
  const userTotalRewardPaidBigNumber:
    | UserTotalRewardsBigNumberType
    | undefined = useUserTotalRewardPaid(account);

  const userTotalRewardPaidETH: number = Number(
    formatEther(userTotalRewardPaidBigNumber?.rewardPaidETH ?? 0)
  );
  const currentNetwork = useCurrentNetwork();

  return (
    <ItemContainer>
      <IncomeContainer
        currency="Native"
        logo={currentNetwork?.NetworkLogoURL}
        value={userTotalRewardPaidETH.toFixed(3)}
        symbol={currentNetwork?.NetworkSymbol}
      ></IncomeContainer>
    </ItemContainer>
  );
};
