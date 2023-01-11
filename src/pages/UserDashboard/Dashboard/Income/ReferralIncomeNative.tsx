import { useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import {
  TokenLogo,
  TokenSymbol,
  useCurrentNetwork,
} from "../../../../constants";
import {
  useReferralUserAccount,
  useUserTotalRewardPaid,
} from "../../../../hooks/referral";
import { ItemContainer } from "../ItemContainer";
import { IncomeContainer } from "./IncomeContainer";

export const ReferralIncomeNative = () => {
  const { account } = useEthers();
  const userTotalRewardPaid = useUserTotalRewardPaid(account);
  const currentNetwork = useCurrentNetwork();

  return (
    <ItemContainer>
      <IncomeContainer
        currency="Native"
        logo={currentNetwork?.NetworkLogoURL}
        value={
          userTotalRewardPaid
            ? Number(
                formatEther(userTotalRewardPaid?.totalRewardPaidETH)
              ).toFixed(3)
            : 0
        }
        symbol={currentNetwork?.NetworkSymbol}
      ></IncomeContainer>
    </ItemContainer>
  );
};
