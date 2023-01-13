import { useEthers } from "@usedapp/core";
import { formatEther, formatUnits } from "ethers/lib/utils";
import {
  TokenLogo,
  TokenSymbol,
  useCurrentNetwork,
} from "../../../../constants";
import { useReferralUserAccount } from "../../../../hooks/referral";
import {
  useReferralUserTotalBusiness,
  UserTotalBusinessNumberType,
} from "../../../../hooks/referral/useReferralUserTotalBusiness";
import { ItemContainer } from "../ItemContainer";
import { BusinessContainer } from "./BusinessContainer";

export const BusinessETH = () => {
  const { account } = useEthers();
  const currentNetwork = useCurrentNetwork();
  const userTotalBusinessBigNumber = useReferralUserTotalBusiness(account);
  const userTotalBusiness: UserTotalBusinessNumberType = {
    businessETH: userTotalBusinessBigNumber
      ? Number(formatEther(userTotalBusinessBigNumber.businessETH))
      : 0,
    businessUSD: userTotalBusinessBigNumber
      ? Number(formatUnits(userTotalBusinessBigNumber.businessUSD, 6))
      : 0,
  };

  return (
    <ItemContainer>
      <BusinessContainer
        currency="Native"
        logo={currentNetwork?.NetworkLogoURL}
        value={userTotalBusiness?.businessETH.toFixed(3)}
        symbol={currentNetwork?.NetworkSymbol}
      ></BusinessContainer>
    </ItemContainer>
  );
};
