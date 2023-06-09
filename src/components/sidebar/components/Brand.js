import React from "react";

// Chakra imports
import { Flex,Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Text h='24px' w='185px' my='32px' fontWeight={'extrabold'} fontSize={'xl'}>
          ALPHA DASHBOARD
      </Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
