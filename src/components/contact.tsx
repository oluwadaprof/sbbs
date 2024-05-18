import { Text } from "@/primitive/text";
import { Box, Flex, VStack } from "../../styled-system/jsx";
import { Button } from "@/primitive/button";
import { css } from "../../styled-system/css";
import { MdOutlinePhone } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";

export const Contact = () => {
  return (
    <VStack maxW="breakpoint-xl">
      <Text>CONTACT</Text>
      <Text fontStyle="italic" fontSize="1.7rem">
        Whats{" "}
        <span
          className={css({
            color: "yellow.700",
            fontSize: " 3rem",
            fontStyle: "normal",
          })}
        >
          YOUR
        </span>
      </Text>
      <Text fontStyle="italic" fontSize="1.7rem">
        next{" "}
        <span
          className={css({
            color: "yellow.700",
            fontSize: " 3rem",
            fontStyle: "normal",
          })}
        >
          PROJECT
        </span>
      </Text>
      <Flex flexDir="column" align="flex-end" gap="2">
        <Flex
          textAlign="right"
          align="center"
          gap={{ base: "1rem", lgDown: "0" }}
          flexWrap="wrap"
          justify="center"
         
        >
          <Text   fontSize={{ base: "1.2rem", mdDown: "1rem", smDown: "1rem" }}>
            Every great design begins with a conversation
          </Text>
          <Button
            alignSelf={{ lgDown: "center" }}
            size="md"
            mt="1rem"
            mr={{base:"3.8rem", lgDown: '3.5rem', smDown: '0'}}
            look="success"
            className={css({
              transform: { lgDown: "scale(.8,.8)" },
            })}
          >
            <MdOutlinePhone size={20} />
            <Text> +234717171717171</Text>
          </Button>
        </Flex>
        <Flex
          flexDir="row"
          align="center"
          gap={{ base: "1rem", lgDown: "0" }}
          flexWrap="wrap"
          justify="center"
        >
          <Text
            fontSize={{ base: "1.1rem", mdDown: "1rem", smDown: "1rem" }}
          >
            Share your vision with us
          </Text>
          <Button
            alignSelf={{ lgDown: "center" }}
            size="md"
            mt="1rem"
            look="success"
            className={css({
              transform: { lgDown: "scale(.8,.8)" },
            })}
          >
            <SlEnvolope size={20} />
            <Text>Hello@spacebybloom.com</Text>
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
};
