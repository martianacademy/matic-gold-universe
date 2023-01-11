import {
  Box,
  Button,
  Center,
  useColorMode,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

export const ComponentContainer = ({ name, icon, children }) => {
  const { colorMode } = useColorMode();
  return (
    <VStack p={5} spacing={5}>
      <Button
        variant="outline"
        size="lg"
        borderRadius="xl"
        color="yellow.500"
        borderColor="yellow.500"
        rightIcon={icon}
      >
        {name}
      </Button>
      <Wrap
        w="full"
        spacing={5}
        align="center"
        justify="center"
        borderWidth="thin"
        borderRadius="50px"
        borderColor="yellow.500"
        p={5}
      >
        {children}
      </Wrap>
    </VStack>
  );
};
