import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";

const TopNav = ({title,onOpen}) => {
  return (
   
    <Box>
    <HStack maxW="70rem"  h="16" justify="space-between"  mx="auto">

    <Icon as={FaBars} onClick={onOpen} display={{
      base:"block",
      lg:"none"

    }}/>
    <Heading  px="4" fontWeight="medium" fontSize="28px">{title}</Heading>

    <Menu>
      <MenuButton>
        <Icon as={FaUserTie} fontSize="24px" />
      </MenuButton>
      <MenuList>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Support</MenuItem>
      </MenuList>
    </Menu>
  </HStack>
    </Box>
  );
};

export default TopNav;
