"use client";

import { useState } from "react";
import { Text } from "@/primitive/text";
import { Box, Flex, Grid } from "../../../styled-system/jsx";
import Image from "next/image";
import fifthImage from "../../../public/fifth.png";
import renovation from '../../../public/renovation.png'
import space from '../../../public/space.png'
import kitchen from '../../../public/Kitchen.png'
import bathroom from '../../../public/bathroom.png'
import construction from '../../../public/newconstruction.png'
import furniture from '../../../public/customfurniture.png'

export const SectionFour = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <Flex
      justify="center"
      align="center"
      flexDir="column"
      mt={{ base: "10rem", lgDown: "10rem", smDown: "8rem" }}
    >
      <Box textAlign="center">
        <Text>SERVICES</Text>
        <Text fontSize={{base:"3rem", lgDown: '1.6rem'}}>WE DESIGN YOUR SPACE</Text>
        <Text mb="1.5rem">-----SINCE 20GHENGHEN-------</Text>
      </Box>
      <Grid columns={{ base: 3, lgDown: 2, smDown: 2, }}>
      {WORKS_DATA.map((work) => (
          <Box
            key={work.id}
            position="relative"
            width={{base: "18rem", lgDown: "13rem", smDown: '10rem'}}
            height={{base:"27rem", lgDown: "20rem", smDown: '10rem'}}
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image src={work.imageUrl} objectFit="cover" alt="work description" layout="fill" />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              bg="rgba(0, 0, 0, 0.7)"
              color="white"
              textAlign="center"
              p="1rem"
              opacity={hoveredId === work.id ? 1 : 0}
              transition="opacity 0.3s ease"
            >
              <Text fontSize={{base:"1.5rem", lgDown:".8rem"}}>{work.description}</Text>
            </Box>
          </Box>
        ))}  
      </Grid>
    </Flex>
  );
};

 const WORKS_DATA = [
  {
    id: 1,
    imageUrl: renovation,
    description: 'RENOVATION'
  },
  {
    id: 2,
    imageUrl: construction,
    description: 'NEW CONSTRUCTION'
  },
  {
    id: 3,
    imageUrl: bathroom,
    description: 'BATHROOM'
  },
  {
    id: 4,
    imageUrl: kitchen,
    description: 'KITCHEN'
  },
  {
    id: 5,
    imageUrl: furniture,
    description: 'CUSTOM FURNITURE'
  },
  {
    id: 6,
    imageUrl: space,
    description: 'COMMERCIAL SPACE'
  }
 ]
