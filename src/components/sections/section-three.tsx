import { Text } from "@/primitive/text";
import { Box, Flex, Grid, HStack } from "../../../styled-system/jsx";
import Image from "next/image";
import fifthImage from "../../../public/fifth.png";
import sixthImage from "../../../public/sixth.png";
import { css } from "../../../styled-system/css";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlineChair } from "react-icons/md";
import { PiHouseLineBold, PiEngine } from "react-icons/pi";
import { LuBadgeCheck } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";

export const SectionThree = () => {
  return (
    <HStack
      id="services"
      h={{ base: "60vh", smDown: "70vh" }}
      bg="black"
      mt={{ base: "10rem", lgDown: "10rem" }}
      px="3rem"
      justify="space-around"
      flexWrap={{ lgDown: "wrap" }}
      pos="relative"
      overflowY="visible"
      gap="2rem"
      mx="auto"
    >
      <Grid
        columns={{ base: 2, lgDown: 3, smDown: 2 }}
        flexWrap="wrap"
        ml={{ lgDown: "1rem", smDown: 0 }}
        columnGap={{ smDown: "1rem" }}
        gap={{ base: "1.2rem", lgDown: ".7rem", smDown: "1rem" }}
        flexDir={{ lgDown: "column" }}
        w={{ base: "50%", lgDown: "100%" }}
        mt={{ lgDown: "2rem", smDown: "2rem" }}
        justifyContent="center"
        maxW="breakpoint-xl"
      >
        {SERVICE_DATA.map(({ id, header, content, icon }) => (
          <Flex
            key={id}
            gap={{ base: ".8rem" }}
            w={{ base: "20rem", lgDown: "12rem", smDown: "10rem" }}
          >
            {icon}
            <Box>
              <Text color="white" fontSize={{ base: "1rem", smDown: ".8rem" }}>
                {header}
              </Text>
              <Text
                textWrap="wrap"
                w={{ base: "70%", lgDown: "full" }}
                color="white"
                fontSize={{ base: "1rem", smDown: ".7rem" }}
              >
                {content}
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>

      <Box>
        <Image
          src={sixthImage}
          objectFit="contain"
          alt="lady"
          className={css({
            h: { base: "500", lgDown: "400", smDown: "220" },
            w: { base: "760", lgDown: "550", smDown: "350" },
          })}
        />
      </Box>
    </HStack>
  );
};

const SERVICE_DATA = [
  {
    id: 1,
    header: "CONCEPTION",
    content: "Interior design and furniture crafting",
    icon: (
      <AiOutlineAlert
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
        color="white"
      />
    ),
  },
  {
    id: 2,
    header: "VISUALIZATION",
    content: "Developing realistic 3D models",
    icon: (
      <GoDeviceCameraVideo
        color="white"
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
      />
    ),
  },
  {
    id: 3,
    header: "CONSTRUCTION",
    content: "Managing specialized and general labor",
    icon: (
      <PiEngine
        color="white"
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
      />
    ),
  },
  {
    id: 4,
    header: "RESEARCH",
    content: "Curating materials, furniture and accessories",
    icon: (
      <MdOutlineChair
        color="white"
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
      />
    ),
  },
  {
    id: 5,
    header: "PLANNING",
    content: "Technical plans and construction details",
    icon: (
      <PiHouseLineBold
        color="white"
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
      />
    ),
  },
  {
    id: 6,
    header: "COORDINATION",
    content: "Directing work and monitoring construction sites",
    icon: (
      <LuBadgeCheck
        color="white"
        className={css({
          h: { base: "2rem", lgDown: "2rem" },
          w: { base: "2rem", lgDown: "2rem" },
        })}
      />
    ),
  },
];
