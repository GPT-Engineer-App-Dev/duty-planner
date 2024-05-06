import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <Flex as="nav" bgGradient="linear(to-r, teal.500, green.500)" color="white" padding="4" justifyContent="space-between" boxShadow="md">
      <Box>
        <Link href="/" display="flex" alignItems="center">
          <FaHome />
          <Text marginLeft="2">Home</Text>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
