import { Box, Flex, VStack } from "../../../styled-system/jsx";
import heroImage from "../../../public/first.png";
import Image from "next/image";
import { Text } from "@/primitive/text";
import { css } from "../../../styled-system/css";

export const HeroSection = () => {
  return (
    <Flex bg="red.100"  scrollSnapAlign="start" h="90vh" w="full" pos="relative">
      <Box w="full" display="flex" alignItems="center">
        <VStack w="full">
          <Text
            w={{ base: "full", md: "25rem" }}
            fontSize={{ base: "1.2rem", lgDown: "1rem", smDown: "1rem" }}
            textAlign="center"
            fontWeight="bold"
            p="1"
            mx="auto"
            my="auto"
            zIndex="1"
          >
            <span
              className={css({
                fontSize: "4rem",
              })}
            >
              ELEVATE
            </span>
            <br /> your space with <br />{" "}
            <span
              className={css({
                fontSize: "2rem",
              })}
            >
             TIMELESS ELEGANCE
            </span>
          </Text>
          <Text
            w={{ base: "100%", md: "25rem" }}
            fontSize={{ base: "1rem", md: "1rem" }}
            zIndex="1"
            textAlign="center"
            bg="yellow.700"
            p="1rem"
            color="white"
          >
            From luxurious furniture to exquisite artwork, our pieces are
            designed to elevate your everyday living experience.
          </Text>
        </VStack>
      </Box>
      <Box h="100%" w="full" pos="absolute" top="0" left="0" zIndex="0">
        <Image src={heroImage} layout="fill" objectFit="cover" alt="Logo" />
      </Box>
    </Flex>
  );
};

// height={950} width={1390}
