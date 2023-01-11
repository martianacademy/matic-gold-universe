import { Spinner, VStack } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import React from "react";
import { Outlet } from "react-router-dom";

export const UserDashboard = () => {
  const { account } = useEthers();
  return (
    <VStack w="full" minH="100vh">
      {account ? <Outlet /> : <Spinner />}
    </VStack>
  );
};
