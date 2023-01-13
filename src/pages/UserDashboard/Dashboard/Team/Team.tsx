import { Button, Input, useClipboard, VStack } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ComponentContainer } from "../ComponentContainer";
import { TeamCountDirect } from "./TeamCountDirect";
import { TeamCountTeam } from "./TeamCountTeam";

export const Team = () => {
  const navigate = useNavigate();
  const { account } = useEthers();
  const userReferrerLink = `https://${window.location.host}/#/swap/${account}`;
  const { value, onCopy, hasCopied } = useClipboard(userReferrerLink);
  return (
    <ComponentContainer name="Team" icon={<FaUserShield />}>
      <TeamCountDirect />
      <TeamCountTeam />
      <Button
        variant="outline"
        borderColor="yellow.500"
        color="yellow.500"
        size="lg"
        borderRadius="xl"
        onClick={() => navigate(`team/${account}`)}
      >
        View Your Team
      </Button>
      <VStack>
        <Input
          isReadOnly
          defaultValue={userReferrerLink}
          borderRadius="xl"
        ></Input>
        <Button borderRadius="xl" onClick={onCopy}>
          {hasCopied ? "Copied" : "Copy Referral Address"}
        </Button>
      </VStack>
    </ComponentContainer>
  );
};
