import { Text } from "@/primitive/text";
import { Box, Flex, HStack } from "../../../styled-system/jsx";
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
      h="50vh"
      bg="black"
      mt={{ base: "10rem", lgDown: "10rem" }}
      px="3rem"
      justify="space-around"
      flexWrap={{ lgDown: "wrap" }}
      pos="relative"
      overflowY="visible"
      transform="skew(0deg,-05deg)"
      gap="2rem"
    >
      <Flex
        flexWrap="wrap"
        gap="1.2rem"
        flexDir={{ lgDown: "row" }}
        w={{ base: "50%", lgDown: "full" }}
        transform="skew(0deg,05deg)"
        align={{ lgDown: "center" }}
      >
        {SERVICE_DATA.map(({ id, header, content, icon }) => (
          <Flex
            key={id}
            align="center"
            gap=".8rem"
            w={{ base: "20rem", lgDown: "12rem", smDown: '10rem' }}
          >
            {icon}
            <Box>
              <Text color="white">{header}</Text>
              <Text color="white">{content}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>

      <Box transform="skew(0deg,05deg)">
        <Image
          src={sixthImage}
          objectFit="contain"
          alt="lady"
          className={css({
            h: { base: "500", lgDown: "400" },
            w: { base: "760", lgDown: "550" },
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
    icon: <AiOutlineAlert color="white" size={25} />,
  },
  {
    id: 2,
    header: "VISUALIZATION",
    content: "Developing realistic 3D models",
    icon: <GoDeviceCameraVideo color="white" size={25} />,
  },
  {
    id: 3,
    header: "CONSTRUCTION",
    content: "Managing specialized and general labor",
    icon: <PiEngine color="white" size={25} />,
  },
  {
    id: 4,
    header: "RESEARCH",
    content: "Curating materials, furniture and accessories",
    icon: <MdOutlineChair color="white" size={25} />,
  },
  {
    id: 5,
    header: "PLANNING",
    content: "Technical plans and construction details",
    icon: <PiHouseLineBold color="white" size={25} />,
  },
  {
    id: 6,
    header: "COORDINATION",
    content: "Directing work and monitoring construction sites",
    icon: <LuBadgeCheck color="white" size={25} />,
  },
];
