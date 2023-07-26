import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
// import Sidenav from "../../components/Sidenav";
// import TopNav from "../../components/TopNav";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import React from "react";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      
      <Box
      display={{
        base:"none",
        lg:"flex"
          }
        }>
      
        <Sidenav   />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title}   onOpen={onOpen} />
        <Container mt="6" maxW="960px" px="4">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
