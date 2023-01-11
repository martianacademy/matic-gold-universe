import {
  Box,
  Button,
  Heading,
  Highlight,
  HStack,
  Image,
  Spacer,
  Text,
  useColorMode,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HeaderHero, HeaderBlob, HeaderBg } from "../../../assets";
import { Link } from "react-scroll";

const ImageMotion = motion(Image);

export const Header = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <VStack w="full" minH="80vh" align="center" justify="center" pt={100}>
      <Wrap align="center" justify="center">
        <VStack align="center" justify="center" spacing={3}>
          <Text
            fontSize="5xl"
            fontWeight={900}
            lineHeight={1}
            bgGradient="linear(to-r, blue, pink.500, yellow.500)"
            bgClip="text"
            align="center"
          >
            #MaticGold Universe
          </Text>
          <Text
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="extrabold"
            maxW="700px"
            align="center"
          >
            A decentralized universe to enhance the eco-system of blockchain
            with more security & transparency.
          </Text>
          <HStack p={3}>
            <Box p={2} borderRadius="full" borderWidth="thick">
              Web3
            </Box>
            <Box p={2} borderRadius="full" borderWidth="thick">
              Metaverse
            </Box>
            <Box p={2} borderRadius="full" borderWidth="thick">
              DeFi
            </Box>
            <Box p={2} borderRadius="full" borderWidth="thick">
              ComDeX
            </Box>
          </HStack>
          <Wrap spacing={[3, 5]} w="full" align="center" justify="center">
            <Button
              borderRadius="3xl"
              w={[300, 250, 200]}
              h={[16, 14]}
              fontSize="xl"
              onClick={() => navigate("swap")}
              bgColor="yellow.500"
              color="white"
            >
              Buy Now
            </Button>
            <Link to="whatis" smooth="true" offset={-100}>
              <Button
                borderRadius="3xl"
                variant="outline"
                w={[300, 250, 200]}
                h={[16, 14]}
                fontSize="xl"
                rightIcon={<FaArrowRight />}
                borderColor="yellow.500"
                color="yellow.500"
              >
                Explore more
              </Button>
            </Link>
          </Wrap>
        </VStack>
        <ImageMotion
          src={HeaderHero}
          w={[350, 450]}
          animate={{
            y: [10, 0, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          p={10}
        ></ImageMotion>
      </Wrap>
    </VStack>
  );
};
