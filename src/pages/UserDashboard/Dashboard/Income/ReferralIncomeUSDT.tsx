import { useEthers } from "@usedapp/core";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { TokenLogo, TokenSymbol, USDTLogo } from "../../../../constants";
import {
  useReferralUserAccount,
  UserTotalRewardsBigNumberType,
  useUserTotalRewardPaid,
} from "../../../../hooks/referral";
import { ItemContainer } from "../ItemContainer";
import { IncomeContainer } from "./IncomeContainer";

export const ReferralIncomeUSDT = () => {
  const { account } = useEthers();
  const userTotalRewardPaidBigNumber:
    | UserTotalRewardsBigNumberType
    | undefined = useUserTotalRewardPaid(account);

  const userTotalRewardPaidUSD: number = Number(
    formatUnits(userTotalRewardPaidBigNumber?.rewardPaidUSD ?? 0, 6)
  );

  return (
    <ItemContainer>
      <IncomeContainer
        currency="USDT"
        logo={USDTLogo}
        value={userTotalRewardPaidUSD.toFixed(3)}
        symbol={"USDT"}
      ></IncomeContainer>
    </ItemContainer>
  );
};
