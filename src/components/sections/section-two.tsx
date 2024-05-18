import { Text } from "@/primitive/text";
import { Box, Divider, Flex, VStack } from "../../../styled-system/jsx";
import Image from "next/image";
import thirdImage from "../../../public/third.png";
import fourthImage from "../../../public/fourth.png";
import { css } from "../../../styled-system/css";

export const SectionTwo = () => {
  return (
    <VStack mt={{ lgDown: "2rem", smDown: "2rem" }}>
      <Text>OUR PARTNERS</Text>
      <Divider color="black" />
      <Flex justify={{ lgDown: "center" }} flexWrap={{ lgDown: "wrap" }}>
        <Image
          className={css({
            mixBlendMode: "multiply",
          })}
          src={thirdImage}
          alt="partner-logo"
        />
        <Image src={fourthImage} alt="partner-logo-2" />
      </Flex>
      <Divider color="black" />
    </VStack>
  );
};
