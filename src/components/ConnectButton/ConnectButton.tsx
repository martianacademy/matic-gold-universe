import {
  Box,
  Button,
  ButtonProps,
  Drawer,
  DrawerContent,
  HStack,
  Icon,
  Image,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { shortenAddress, useEthers } from "@usedapp/core";
import { IoIosWallet } from "react-icons/io";
import { useIsMobile } from "../../constants";
import { useCurrentNetwork } from "../../constants/Data";
import { AuthDrawer } from "./Auth";
import { NoAuthDrawer } from "./NoAuth";

export const ConnectButton = (props: ButtonProps) => {
  const { account } = useEthers();
  const currentNetwork = useCurrentNetwork();
  const isMobile = useIsMobile();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  return (
    <Button {...props} onClick={onOpenDrawer} w="max">
      {account ? (
        <HStack w="full">
          <Show above="sm">
            <Icon as={IoIosWallet} boxSize={5} color="yellow.500"></Icon>
          </Show>
          <Text>{shortenAddress(account)}</Text>
          <Show above="sm">
            <Image
              src={currentNetwork?.NetworkLogoURL}
              boxSize={5}
              border="2px solid white"
              borderRadius="full"
              bgColor="white"
            ></Image>
          </Show>
        </HStack>
      ) : isMobile ? (
        "Connect"
      ) : (
        "Connect Wallet"
      )}
      <Drawer
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        placement="bottom"
        blockScrollOnMount={false}
      >
        <DrawerContent borderTopRadius="25%" borderTopWidth="thick">
          {account ? (
            <AuthDrawer onClose={onCloseDrawer}></AuthDrawer>
          ) : (
            <NoAuthDrawer onClose={() => onCloseDrawer()}></NoAuthDrawer>
          )}
        </DrawerContent>
      </Drawer>
    </Button>
  );
};
