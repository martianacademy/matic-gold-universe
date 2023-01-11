import { Button, Spinner, VStack } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import { MdDashboardCustomize } from "react-icons/md";
import { useReferralUserAccount } from "../../../hooks/referral";
import { Business } from "./Business";
import { Income } from "./Income";
import { Staking } from "./Staking";
import { Team } from "./Team";
import { UserBalances } from "./UserBalances";

export const Dashboard = () => {
  const { account } = useEthers();
  const userAccountMap = useReferralUserAccount(account);
  return account && userAccountMap ? (
    <VStack w="full" minH="100vh" py={100} spacing={5}>
      <Button
        variant="outline"
        size="lg"
        color="yellow.500"
        borderColor="yellow.500"
        fontSize="xl"
        fontWeight={700}
        borderRadius="xl"
        rightIcon={<MdDashboardCustomize />}
      >
        Your Dashboard Stats
      </Button>
      <UserBalances />
      <Staking />
      <Team />
      <Business />
      <Income />
    </VStack>
  ) : (
    <VStack w="full" minH="100vh" align="center" justify="center">
      <Spinner />
    </VStack>
  );
};
