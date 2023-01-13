import { useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { TokenLogo, TokenSymbol } from "../../../../constants";
import {
  UserTotalRewardsBigNumberType,
  UserTotalRewardsNumberType,
  useUserTotalRewardPaid,
} from "../../../../hooks/referral";
import { ItemContainer } from "../ItemContainer";
import { IncomeContainer } from "./IncomeContainer";

export const ReferralIncomeStaking = () => {
  const { account } = useEthers();
  const userTotalRewardPaidBigNumber:
    | UserTotalRewardsBigNumberType
    | undefined = useUserTotalRewardPaid(account);

  const userTotalRewardPaidStaking: number = Number(
    formatEther(userTotalRewardPaidBigNumber?.rewardPaidStaking ?? 0)
  );

  return (
    <ItemContainer>
      <IncomeContainer
        currency="Staking"
        logo={TokenLogo}
        value={userTotalRewardPaidStaking.toFixed(3)}
        symbol={TokenSymbol}
      ></IncomeContainer>
    </ItemContainer>
  );
};
