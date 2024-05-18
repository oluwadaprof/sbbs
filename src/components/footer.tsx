import { Text } from "@/primitive/text";
import { Box, Divider, Flex, HStack, VStack } from "../../styled-system/jsx";
import Link from "next/link";
import { css } from "../../styled-system/css";
import { SlSocialFacebook } from "react-icons/sl";
import { Input } from "@/primitive/input";
import { Button } from "@/primitive/button";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa6";

export const Footer = () => {
  return (
    <Box bg="black" w="full" mt="2rem">
      <Flex
        color="white"
        justify={{ base: "space-around", lgDown: "flex-start" }}
        gap={{ lgDown: "2rem" }}
        p="2rem"
        flexWrap="wrap"
      >
        <VStack alignItems="flex-start">
          <Text textAlign="left">Follow us</Text>
          <HStack>
            {SOCIAL_LINKS.map(({ id, icon }) => (
              <Flex
                key={id}
                justify="center"
                align="center"
                bg="white"
                rounded="full"
                h="2rem"
                w="2rem"
                _hover={{
                  bg: "yellow.700",
                  cursor: 'pointer'
                }}
              >
                {icon}
              </Flex>
            ))}
          </HStack>
        </VStack>
        <Divider orientation="vertical" color="white" bg="white" border="1px" />
        <VStack justify="flex-start" alignItems="flex-start">
          <Text>Subscriber</Text>
          <HStack bg="white" w="100%" p="1px" pl=".4rem">
            <input
              placeholder="sbbs@gmail.com"
              className={css({
                width: "100%",
                color: "black",
                _focus: {
                  outline: "none",
                },
              })}
            />
            <Button size="xs" py="1" look="success">
              Subscribe
            </Button>
          </HStack>
        </VStack>
      </Flex>
      <HStack flexWrap="wrap" justify="center">
        {LINKS.map(({ name, id }) => (
          <Link
            key={id}
            className={css({
              w: "auto",
              px: "3",
              py: "2",
              color: "white",
            })}
            href="/"
          >
            {name}
          </Link>
        ))}
      </HStack>
      <Text p={3} color="white" fontSize="1rem" textAlign="center">
        {" "}
        © 2024 All Rights Reserved
      </Text>
    </Box>
  );
};

const LINKS = [
  {
    id: 1,
    name: "Privacy Policy",
  },
  {
    id: 2,
    name: "Term of use",
  },
  {
    id: 3,
    name: "Sales and Refunds",
  },
  {
    id: 4,
    name: "Legal",
  },
  {
    id: 5,
    name: "Site Map",
  },
];

const SOCIAL_LINKS = [
  {
    id: 1,
    icon: (
      <SlSocialFacebook
        className={css({
          color: "black",
        })}
        size={20}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <SlSocialTwitter
        className={css({
          color: "black",
        })}
        size={20}
      />
    ),
  },
  {
    id: 3,
    icon: (
      <FaInstagram
        className={css({
          color: "black",
        })}
        size={20}
      />
    ),
  },
  {
    id: 4,
    icon: (
      <PiTelegramLogo
        className={css({
          color: "black",
        })}
        size={20}
      />
    ),
  },
  {
    id: 5,
    icon: (
      <FaFigma
        className={css({
          color: "black",
        })}
        size={20}
      />
    ),
  },
];
