import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonProps,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useClipboard,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { shortenAddress, useEthers } from "@usedapp/core";
import { BsPower } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import {
  AddressZero,
  TokenLogo,
  TokenSymbol,
  useCurrentNetwork,
} from "../../../constants";

import { useNativeBalance, useTokenBalance } from "../../../hooks/utils";

export const AuthDrawer = ({
  style,
  onClose,
}: {
  style?: ButtonProps;
  onClose: () => void;
}) => {
  const currentNetwork = useCurrentNetwork();
  const { account, deactivate } = useEthers();

  const { colorMode } = useColorMode();
  const { onCopy, value, setValue, hasCopied } = useClipboard(account ?? "");
  const userEthBalance = useNativeBalance(account);
  const userTokenBalance = useTokenBalance(account);

  const handleDeactivateWallet = () => {
    try {
      onClose();

      setTimeout(() => {
        deactivate();
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Center w="full" p={5} flexDir="column">
      <DrawerHeader>
        <VStack spacing={0}>
          <HStack w="full" justify="flex-start">
            <VStack align="flex-start">
              <Text fontWeight="thin" fontSize="md" lineHeight={1}>
                {shortenAddress(account ?? AddressZero)}
              </Text>
            </VStack>
            <IconButton
              aria-label="Open is explorer button"
              icon={<ExternalLinkIcon boxSize={5} />}
              as="a"
              href={`${currentNetwork?.NetworkExplorerLink}/address/${account}`}
              target="_blank"
              borderRadius="xl"
            ></IconButton>
            <IconButton
              aria-label="Copy address button"
              onClick={onCopy}
              icon={
                hasCopied ? (
                  <FaCheck size="17"></FaCheck>
                ) : (
                  <MdContentCopy size="17" />
                )
              }
              borderRadius="xl"
            ></IconButton>
          </HStack>
          <HStack w="full" justify="flex-start">
            <Text opacity={0.7} color="#ff0080">
              {currentNetwork?.NetworkName}
            </Text>
          </HStack>
        </VStack>
      </DrawerHeader>

      <DrawerBody w="full" maxW={500}>
        <VStack w="full" h="200px">
          <HStack
            w="full"
            align="center"
            p="5"
            borderRadius="20px"
            bgColor={colorMode === "dark" ? "blackAlpha.500" : "gray.200"}
          >
            <Image src={currentNetwork?.NetworkLogoURL} w={10} h={10}></Image>
            <Text fontSize="xl" fontWeight={900}>
              {currentNetwork?.NetworkSymbol}
            </Text>
            <Spacer />
            <Stat>
              <StatLabel textAlign="right">
                {currentNetwork?.NetworkSymbol}
              </StatLabel>
              <StatNumber textAlign="right">
                {userEthBalance && userEthBalance.toFixed(2)}
              </StatNumber>
            </Stat>
          </HStack>

          <HStack
            w="full"
            align="center"
            bgColor={colorMode === "dark" ? "blackAlpha.500" : "gray.200"}
            p="5"
            borderRadius="20px"
          >
            <Image src={TokenLogo} w={10} h={10}></Image>
            <Text
              fontSize="xl"
              fontWeight={900}
              // color={colorMode === "dark" ? "gray.800" : "white"}
              bgGradient="linear(to-r, blue.500, pink.500, yellow.500)"
              bgClip="text"
            >
              MaticGold
            </Text>
            <Spacer />
            <Stat>
              <StatLabel textAlign="right">{TokenSymbol}</StatLabel>
              <StatNumber textAlign="right">
                {userTokenBalance && userTokenBalance.toFixed(2)}
              </StatNumber>
            </Stat>
          </HStack>
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose} borderRadius="xl">
          Close
        </Button>
        <Button
          colorScheme="red"
          onClick={handleDeactivateWallet}
          leftIcon={<BsPower />}
          borderRadius="xl"
        >
          Disconnect Wallet
        </Button>
      </DrawerFooter>
    </Center>
  );
};
