"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "../../styled-system/jsx";
import { NavBar } from "@/components/navbar/navbar";
import { MobileNav } from "@/components/mobile-nav/mobile-nav";
import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionOne } from "@/components/sections/section-one";
import { SectionTwo } from "@/components/sections/section-two";
import { SectionThree } from "@/components/sections/section-three";
import { SectionFour } from "@/components/sections/section-four";
import { SectionFive } from "@/components/sections/section-five";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <Box w="full" h="100vh" pos="relative">
      <NavBar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      {showMobileNav && (
        <Box transition="opacity 0.2s ease-in-out, transform 0.2s ease-in-out">
          <MobileNav setShowMobileNav={setShowMobileNav} />
        </Box>
      )}
      <Box>
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        {/* <SectionThree /> */}
        <SectionFour />
        <SectionFive />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}
