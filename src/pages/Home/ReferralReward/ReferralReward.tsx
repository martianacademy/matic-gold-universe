import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  useClipboard,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { ConnectButton } from "../../../components/ConnectButton";
import { TokenSymbol } from "../../../constants";

export const ReferralReward = () => {
  const { colorMode } = useColorMode();
  const { account } = useEthers();
  const userReferrerLink = `${window.location.host}/#/swap/${account}`;
  const { value, onCopy, hasCopied } = useClipboard(userReferrerLink);
  return (
    <VStack
      w="full"
      bgColor={colorMode === "dark" ? "rgba(0,0,0,0.92)" : "#EDF2F7"}
      spacing={10}
    >
      <VStack>
        <Text
          fontSize="4xl"
          fontWeight={900}
          bgGradient="linear(to-r, blue, pink.500, yellow.500)"
          bgClip="text"
        >
          Refer & Earn
        </Text>
        <HStack>
          <Text textAlign="center" maxW={500} px={5}>
            Let's spread the community. Just refer your friends & earn upto 10%
            of rewards as soon as he participate in presale.
          </Text>
        </HStack>
      </VStack>
      <VStack spacing={5}>
        <HStack
          p={5}
          borderWidth="thick"
          borderRadius="50px"
          borderColor="yellow.500"
        >
          <VStack spacing={0} p={2} borderWidth="thick" borderRadius="3xl">
            <Heading size="lg">{TokenSymbol}</Heading>
            <Heading size="md">Rewards</Heading>
            <Center w="full" p={1}>
              <Divider />
            </Center>
            <Heading>10%</Heading>
          </VStack>
          <Center h="100px" p={3}>
            <Divider
              orientation="vertical"
              borderWidth="thick"
              borderColor="yellow.500"
              borderRadius="full"
            ></Divider>
          </Center>
          <VStack spacing={0} p={2} borderWidth="thick" borderRadius="3xl">
            <Heading size="lg">Native</Heading>
            <Heading size="md">Rewards</Heading>
            <Center w="full" p={1}>
              <Divider />
            </Center>
            <Heading>5%</Heading>
          </VStack>
        </HStack>
        <Heading size="2xl" color="yellow.500" fontWeight={900}>
          Reward Upto 5 Levels
        </Heading>
        <Heading size="md">Instant rewards in your wallet.</Heading>
      </VStack>
      <Icon as={FaUsers} w={32} h={32} color="yellow.500"></Icon>
      {account ? (
        <VStack>
          <Input isReadOnly value={userReferrerLink} borderRadius="xl"></Input>
          <Button borderRadius="xl" onClick={onCopy}>
            {hasCopied ? "Copied" : "Copy Your Referral Address"}
          </Button>
        </VStack>
      ) : (
        <VStack>
          <Heading size="lg" maxW={500} px={5} textAlign="center">
            Please connect your wallet to get your referral link.
          </Heading>
          <ConnectButton
            size="lg"
            borderRadius="2xl"
            variant="outline"
            color="yellow.500"
            borderColor="yellow.500"
            borderWidth="thick"
          ></ConnectButton>
        </VStack>
      )}

      {/* <VStack>
        <Heading color="#ff0080">Share now</Heading>
        <HStack>
          <Center
            borderWidth="thin"
            borderRadius="full"
            w={14}
            h={14}
            cursor="pointer"
          >
            <Icon as={FaTwitter} w={7} h={7}></Icon>
          </Center>
          <Center
            borderWidth="thin"
            borderRadius="full"
            w={14}
            h={14}
            cursor="pointer"
          >
            <Icon as={FaFacebook} w={7} h={7}></Icon>
          </Center>
          <Center
            borderWidth="thin"
            borderRadius="full"
            w={14}
            h={14}
            cursor="pointer"
          >
            <Icon as={FaInstagram} w={7} h={7}></Icon>
          </Center>
          <Center
            borderWidth="thin"
            borderRadius="full"
            w={14}
            h={14}
            cursor="pointer"
          >
            <Icon as={FaWhatsapp} w={7} h={7}></Icon>
          </Center>
        </HStack>
      </VStack> */}
    </VStack>
  );
};
