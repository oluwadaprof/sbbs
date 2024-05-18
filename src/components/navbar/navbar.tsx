"use client";

import Image from "next/image";
import { css } from "../../../styled-system/css";
import { Box, Flex, HStack } from "../../../styled-system/jsx";
import logo from "../.../../../../public/Gold 1.png";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MobileNav } from "../mobile-nav/mobile-nav";

type Props = {
  showMobileNav: boolean;
  setShowMobileNav: (value: boolean) => void;
};

export const NavBar = ({ showMobileNav, setShowMobileNav }: Props) => {
  return (
    <Flex
      justify="space-between"
      color="white"
      bg="black"
      h="auto"
      w="full"
      px="2"
      align="center"
      zIndex="0"
    >
      <Box
        className={css({
          w: "auto",
          ml: "2rem",
          py: "1rem",
        })}
      >
        <Image src={logo} alt="Logo" width={50} height={50} />
      </Box>
      <HStack
        className={css({
          display: { base: "flex", lgDown: "none" },
        })}
        gap="3rem"
        mr="3rem"
      >
        {LINK_DATA.map(({ id, label }) => (
          <Link
            key={id}
            className={css({
              w: "auto",
              px: "3",
              py: "2",
              _hover: {
                bg: "yellow.700",
                px: "3",
                py: "2",
                w: "auto",
                transition: "ease-in .2s",
              },
            })}
            href="/"
          >
            {label}
          </Link>
        ))}
      </HStack>

      <Box
        className={css({
          display: { base: "none", lgDown: showMobileNav ? "none" : "flex" },
          _hover: { cursor: "pointer" },
        })}
        onClick={() => setShowMobileNav(true)}
      >
        <AiOutlineMenu
          className={css({
            _hover: {
              cursor: "pointer",
            },
          })}
          size={30}
        />
      </Box>
    </Flex>
  );
};

const LINK_DATA = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Services",
  },
  {
    id: 3,
    label: "Our Work",
  },
  {
    id: 4,
    label: "Articles",
  },
  {
    id: 5,
    label: "Contact",
  },
];
