import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px">
      <Heading as="h1">Tach Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>tach123@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.100" justify={"space-between"} wrap="wrap">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="green">
    //     4
    //   </Box>
    // </Flex>
  );
};

export default Navbar;
