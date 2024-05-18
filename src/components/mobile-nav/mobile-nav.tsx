import Link from "next/link";
import { Box, Divider, Flex, VStack } from "../../../styled-system/jsx";
import { css } from "../../../styled-system/css";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { LINK_DATA } from "../navbar/navbar";

type Props = {
  setShowMobileNav: (value: boolean) => void;
};

export const MobileNav = ({ setShowMobileNav }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShowMobileNav(false), 2000);
  };
  return (
    <Box
      className={css({
        display: { lgToXl: "none" },
      })}
      bg="black"
      w="50%"
      p="4"
      pos="absolute"
      right="0"
      top="0"
      zIndex="2"
      h="100vh"
      color="white"
      display="flex"
      flexDirection="column"
      transition="opacity 0.2s ease-in-out, transform 0.2s ease-in-out"
      opacity={visible ? 1 : 0}
      transform={visible ? "translateX(0)" : "translateX(100%)"}
      gap="1rem"
    >
      <Flex align="center" justify="flex-end">
        <Box
          p="1"
          _hover={{
            cursor: "pointer",
            bg: "yellow.700",
            transition: "ease-in .5s",
            rounded: "sm",
          }}
        >
          <AiOutlineClose
            onClick={() => {
              setShowMobileNav(false);
              handleClose();
            }}
            className={css({
              _hover: {
                cursor: "pointer",
              },
            })}
            size={30}
          />
        </Box>
      </Flex>

      <Divider color="yellow.700" />

      <VStack>
        {LINK_DATA.map(({ id, label, href }) => (
          <Link
            key={id}
            className={css({
              w: "full",
              px: "3",
              py: "2",
              textAlign: "center",
              _hover: {
                bg: "yellow.700",
                px: "3",
                py: "2",
                transition: "ease-in .2s",
              },
            })}
            href={href}
            onClick={() => setShowMobileNav(false)}
          >
            {label}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};
