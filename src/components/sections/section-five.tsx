import { Text } from "@/primitive/text";
import { Box, Grid, VStack } from "../../../styled-system/jsx";
import one from "../../../public/one.png";
import two from "../../../public/two.png";
import three from "../../../public/three.png";
import four from "../../../public/four.png";
import five from "../../../public/five.png";
import six from "../../../public/six.png";
import seven from "../../../public/seven.png";
import eight from "../../../public/eight.png";
import nine from "../../../public/nine.png";
import ten from "../../../public/ten.png";
import eleven from "../../../public/eleven.png";
import twelve from "../../../public/twelve.png";
import thirtheen from "../../../public/thirtheen.png";
import fourteen from "../../../public/fourteen.png";
import fifteeen from "../../../public/fifteen.png";
import Image from "next/image";
import { css } from "../../../styled-system/css";
import { Button } from "@/primitive/button";
import { RxCaretRight } from "react-icons/rx";

export const SectionFive = () => {
  return (
    <VStack
      alignItems="center"
      mt={{ base: "5rem", lgDown: "5rem", smDown: "5rem" }}
    >
      <Text>OUR WORK</Text>
      <Text fontSize={{ base: "3rem", lgDown: "1.6rem" }}>FEATURED WORK</Text>
      <Grid
        columns={{ base: 7, lgDown: 4, smDown: 3, "@/xs": 2 }}
        alignItems="center"
        justifyContent="center"
        rowGap="1"
        columnGap="1"
      >
        {IMAGES.map(({ id, picture, name }) => (
          <Box
            overflow="hidden"
            position="relative"
            rounded="sm"
            h={{ base: 150, lgDown: 150 }}
            w={{ base: 150, lgDown: 100 }}
            key={id}
          >
            <Image
              className={css({
                _hover: {
                  transform: "scale(1.1)",
                  transition: "ease-in-out .3s",
                },
              })}
              src={picture}
              alt={name}
              layout="fill"
            />
          </Box>
        ))}
      </Grid>
      <Button
        alignSelf={{ lgDown: "center" }}
        size="md"
        mt="1rem"
        look="success"
      >
        <Text>Explore our work</Text>
        <RxCaretRight size={20} />
      </Button>
      <Box mb="4rem" />
    </VStack>
  );
};

const IMAGES = [
  {
    id: 1,
    name: "one",
    picture: one,
  },
  {
    id: 2,
    name: "two",
    picture: two,
  },
  {
    id: 3,
    name: "three",
    picture: three,
  },
  {
    id: 4,
    name: "four",
    picture: four,
  },
  {
    id: 5,
    name: "five",
    picture: five,
  },
  {
    id: 6,
    name: "six",
    picture: six,
  },
  {
    id: 7,
    name: "seven",
    picture: seven,
  },
  {
    id: 8,
    name: "eight",
    picture: eight,
  },
  {
    id: 9,
    name: "nine",
    picture: nine,
  },
  {
    id: 10,
    name: "ten",
    picture: ten,
  },
  {
    id: 11,
    name: "eleven",
    picture: eleven,
  },
  {
    id: 12,
    name: "twelve",
    picture: twelve,
  },
  {
    id: 13,
    name: "thirtheen",
    picture: thirtheen,
  },
  {
    id: 14,
    name: "fourteen",
    picture: fourteen,
  },
];
