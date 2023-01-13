import { useEthers } from "@usedapp/core";
import { formatEther, formatUnits } from "ethers/lib/utils";
import {
  TokenLogo,
  TokenSymbol,
  USDTLogo,
  useCurrentNetwork,
} from "../../../../constants";
import { useReferralUserAccount } from "../../../../hooks/referral";
import {
  useReferralUserTotalBusiness,
  UserTotalBusinessNumberType,
} from "../../../../hooks/referral/useReferralUserTotalBusiness";
import { ItemContainer } from "../ItemContainer";
import { BusinessContainer } from "./BusinessContainer";

export const BusinessUSD = () => {
  const { account } = useEthers();
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
        currency="USDT"
        logo={USDTLogo}
        value={userTotalBusiness?.businessUSD.toFixed(3)}
        symbol={"USDT"}
      ></BusinessContainer>
    </ItemContainer>
  );
};
