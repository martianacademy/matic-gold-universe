import { useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { TokenLogo, TokenSymbol } from "../../../../constants";
import {
  useReferralUserAccount,
  useUserTotalRewardPaid,
} from "../../../../hooks/referral";
import { ItemContainer } from "../ItemContainer";
import { IncomeContainer } from "./IncomeContainer";

export const ReferralIncomeStaking = () => {
  const { account } = useEthers();
  const userTotalRewardPaid = useUserTotalRewardPaid(account);

  return (
    <ItemContainer>
      <IncomeContainer
        currency="Staking"
        logo={TokenLogo}
        value={
          userTotalRewardPaid
            ? Number(
                formatEther(userTotalRewardPaid?.totalRewardPaidStaking)
              ).toFixed(3)
            : 0
        }
        symbol={TokenSymbol}
      ></IncomeContainer>
    </ItemContainer>
  );
};
