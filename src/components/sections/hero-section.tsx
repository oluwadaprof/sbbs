import { Box, Flex, VStack } from "../../../styled-system/jsx";
import heroImage from "../../../public/first.png";
import Image from "next/image";
import { Text } from "@/primitive/text";
import { css } from "../../../styled-system/css";

export const HeroSection = () => {
  return (
    <Flex  h="90vh"  pos="relative" >
      <Box  display="flex" alignItems="center" >
        <VStack  pos="absolute" left={{base: "0",lgDown: "0", xl: '121'}} alignItems="flex-start" justifyContent="flex-start" gap="0">
          <span
            className={css({
              fontSize: {
                base: "2.3rem",
                lgDown: "1.5rem",
                smDown: "1.2rem",
              },
              fontStyle: "normal",
              fontWeight: 'bold',
              w: '85%',
              color: "black",
              bg: "white",
              px: "1rem",
              py: '.6rem',
              zIndex: "1",
            })}
          >
            ELEVATE YOUR SPACE
          </span>
          <span
            className={css({
              // mr:'auto',
              fontSize: {
                base: "2.3rem",
                lgDown: "1.5rem",
                smDown: "1.2rem",
              },
              fontWeight: 'bold',
              fontStyle: "normal",
              w: 'auto',
              color: "black",
              bg: "white",
              px: "1rem",
              py: '.6rem',
              zIndex: "1",
            
            })}
          >
            WITH TIMELESS ELEGANCE
          </span>

          <Text
            w={{ base: "100%", md: "25rem" }}
            fontSize={{ base: "1rem", md: "1rem" }}
            zIndex="1"
            textAlign="left"
            // bg="rgba(0, 0, 0, 0.7)"
            bg="rgba(214, 158, 46, .7)"
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
{
  /* <Text
// w={{ base: "full", md: "25rem" }}

w={{ base: "100%", md: "35rem" }}
fontSize={{ base: "1.2rem" }}
textAlign="left"
fontWeight="bold"
p="1"
my="auto"
zIndex="1"
color="white"
fontStyle="italic"
> */
}
