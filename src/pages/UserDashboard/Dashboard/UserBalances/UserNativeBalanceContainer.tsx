import { useEtherBalance, useEthers } from "@usedapp/core";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { CurrentNetworkType, useCurrentNetwork } from "../../../../constants";
import { usePresaleETH_USDPrice } from "../../../../hooks/presale";
import { UserBalanceContainer } from "./UserBalanceContainer";

export const UserNativeBalanceContainer = () => {
  const { account } = useEthers();
  const currentNetwork: CurrentNetworkType = useCurrentNetwork();
  const userNativeBalanceBigNumber: BigNumber | undefined =
    useEtherBalance(account);
  const userNativeBalance: number = userNativeBalanceBigNumber
    ? Number(formatEther(userNativeBalanceBigNumber))
    : 0;
  const getETHPriceBigNumber = usePresaleETH_USDPrice();
  const getETHPrice = getETHPriceBigNumber
    ? Number(formatEther(getETHPriceBigNumber))
    : 0;
  return (
    <UserBalanceContainer
      balance={userNativeBalance.toFixed(3)}
      currency="Native"
      logo={currentNetwork?.NetworkLogoURL}
      price={(getETHPrice * userNativeBalance).toFixed(3)}
      symbol={currentNetwork?.NetworkSymbol}
    ></UserBalanceContainer>
  );
};
