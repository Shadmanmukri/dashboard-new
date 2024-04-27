import React from "react";
import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white" color="#171717">
    <HStack maxW="70rem"  h="16" justify="space-between" mx="auto">
    <Icon as={FaBars} onClick={onOpen} display={{
        base:"block",
        lg:"none",

    }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton>
          <Icon as={FaCircleUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
    </HStack>
    </Box>
  );
};

export default TopNav;
