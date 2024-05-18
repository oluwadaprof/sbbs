import Image from "next/image";
import { Box, Flex, VStack } from "../../../styled-system/jsx";
import secondImage from "../../../public/second.png";
import { Text } from "@/primitive/text";
import { Button } from "@/primitive/button";
import { RxCaretRight } from "react-icons/rx";

export const SectionOne = () => {
  return (
    <Flex
    id="articles"
      h="100vh"
      scrollSnapAlign="start"
      gap="5%"
      align="center"
      justify="space-around"
      px={{ base: "6rem", lgDown: "3rem" }}
      py="2rem"
      flexWrap={{ lgDown: "wrap" }}
      mx="auto"
    >
      <VStack
        alignItems={{ base: "flex-start", lgDown: "center" }}
        gap="1rem"
        w={{base:"50%", lgDown:'100%'}}
        maxW="breakpoint-xl"
      >
        <Text
          textAlign={{ base: "left", lgDown: "center" }}
          fontStyle="italics"
          fontSize={{base:"2rem", lgDown: '1.4rem'}}
        >
          EMBRACE THE ART OF REDEFINED LIVING
        </Text>
        <Text textAlign={{ base: "left", lgDown: "center" }}>
          Our commitment to quality and craftsmanship is evident in every piece
          we create. We use only the finest materials and time-honored
          techniques to ensure that our décor not only looks beautiful but also
          stands the test of time.
        </Text>
        <Button alignSelf={{ lgDown: "center" }} size="md" look="success">
          <Text>Tell us about your project</Text>
          <RxCaretRight size={20} />
        </Button>
      </VStack>
      <Box>
        <Image src={secondImage} alt="furnitures" />
      </Box>
    </Flex>
  );
};
