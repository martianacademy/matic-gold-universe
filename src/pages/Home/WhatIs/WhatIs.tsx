import { HStack, Text, VStack, Icon, Button, Wrap } from "@chakra-ui/react";
import React from "react";
import { BsBox, BsCurrencyExchange, BsHeadsetVr } from "react-icons/bs";
import { FaEthereum, FaPiggyBank } from "react-icons/fa";

export const WhatIs = () => {
  return (
    <VStack w="full" py={50} spacing={10} id="whatis">
      <VStack spacing={5}>
        <VStack spacing={0}>
          <Text fontSize="3xl" fontWeight={900}>
            What is
          </Text>
          <Text
            fontSize="4xl"
            fontWeight={900}
            bgGradient="linear(to-r, blue, pink.500, yellow.500)"
            bgClip="text"
          >
            MaticGold Universe
          </Text>
        </VStack>
        <HStack>
          <Text textAlign="center" maxW={500} px={5}>
            We are a decentralized community to contribute more in the
            eco-systme of revolutionary technology of Blockchain. We are going
            to make a secure platform for web3 users.
          </Text>
        </HStack>
        <Wrap w="full" align="center" justify="center">
          <Button
            variant="outline"
            borderRadius="xl"
            colorScheme="yellow"
            rightIcon={<BsBox />}
          >
            Web3
          </Button>
          <Button
            variant="outline"
            borderRadius="xl"
            colorScheme="yellow"
            rightIcon={<BsHeadsetVr />}
          >
            MetaVerse
          </Button>
          <Button
            variant="outline"
            borderRadius="xl"
            colorScheme="yellow"
            rightIcon={<FaEthereum />}
          >
            DeFi
          </Button>
          <Button
            variant="outline"
            borderRadius="xl"
            colorScheme="yellow"
            rightIcon={<BsCurrencyExchange />}
          >
            ComDeX
          </Button>
        </Wrap>
      </VStack>
    </VStack>
  );
};
