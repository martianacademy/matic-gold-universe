import {
  Heading,
  HStack,
  Text,
  VStack,
  Icon,
  Wrap,
  Center,
  Button,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight, FaPiggyBank, FaTwitter } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const StakingAPYButtonKeyframe = keyframes`
 0% {
   
    border-color: #F6E05E;
  }
  100% {
   
   
    border-color: #ECC94B;
  }
  50% {
   
   
    border-color: #D69E2E;
  }
  100% {
   
    
    border-color: #ECC94B;
  }`;

export const Staking = () => {
  const StakingAPYButtonAnimation = `${StakingAPYButtonKeyframe} infinite 1s`;
  const navigate = useNavigate();
  return (
    <VStack w="full" py={50} spacing={10}>
      <VStack>
        <Text
          fontSize="4xl"
          fontWeight={900}
          bgGradient="linear(to-r, blue, pink.500, yellow.500)"
          bgClip="text"
        >
          Earn with Staking
        </Text>
        <HStack>
          <Text textAlign="center" maxW={500} px={5}>
            Our investor friendly staking programs helps in securing the
            investment & assured more returns.
            <Icon as={FaPiggyBank} color="yellow.500"></Icon>
          </Text>
        </HStack>
      </VStack>
      <Wrap spacing={5} justify="center">
        <Center
          w={250}
          h={200}
          borderWidth="thick"
          borderRadius="50px"
          borderColor="yellow.500"
        >
          <VStack spacing={5}>
            <HStack>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">36%</Heading>
                  <Heading size="sm">APY</Heading>
                </VStack>
              </Center>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">3</Heading>
                  <Heading size="sm">Months</Heading>
                </VStack>
              </Center>
            </HStack>
          </VStack>
        </Center>
        <Center
          w={250}
          h={200}
          borderWidth="thick"
          borderRadius="50px"
          borderColor="yellow.500"
        >
          <VStack spacing={5}>
            <HStack>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">90%</Heading>
                  <Heading size="sm">APY</Heading>
                </VStack>
              </Center>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">6</Heading>
                  <Heading size="sm">Months</Heading>
                </VStack>
              </Center>
            </HStack>
          </VStack>
        </Center>
        <Center
          w={250}
          h={200}
          borderWidth="thick"
          borderRadius="50px"
          borderColor="yellow.500"
        >
          <VStack spacing={5}>
            <HStack>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">216%</Heading>
                  <Heading size="sm">APY</Heading>
                </VStack>
              </Center>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">1</Heading>
                  <Heading size="sm">Year</Heading>
                </VStack>
              </Center>
            </HStack>
          </VStack>
        </Center>
        <Center
          w={250}
          h={200}
          borderWidth="thick"
          borderRadius="50px"
          borderColor="yellow.500"
        >
          <VStack spacing={5}>
            <HStack>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">378%</Heading>
                  <Heading size="sm">APY</Heading>
                </VStack>
              </Center>
              <Center
                boxSize={100}
                borderWidth="thick"
                borderStyle="double"
                borderRadius="full"
                animation={StakingAPYButtonAnimation}
              >
                <VStack spacing={0}>
                  <Heading size="lg">1.5</Heading>
                  <Heading size="sm">Years</Heading>
                </VStack>
              </Center>
            </HStack>
          </VStack>
        </Center>
      </Wrap>
      <Button
        borderRadius="3xl"
        bgColor="yellow.500"
        color="white"
        w="300px"
        h="70px"
        fontSize="lg"
        rightIcon={<FaArrowRight />}
        onClick={() => navigate("user-dashboard/staking")}
      >
        Stake Now
      </Button>
    </VStack>
  );
};
