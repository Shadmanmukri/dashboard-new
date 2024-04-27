import React from 'react'
import { Box, Flex,Container, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./Sidenav.jsx"
import TopNav from './TopNav.jsx'
import SideDrawer from './SideDrawer.jsx'
const DashboarLayout = ({ title, children }) => {

  const {isOpen, onClose, onOpen}=useDisclosure()
  return (
    <Flex>
    <Box
     display={{
      base:"none",
      lg:"flex",
    }}>

    <Sidenav/>

    </Box>
    <SideDrawer isOpen={isOpen} onClose={onClose} />
    <Box flexGrow={1}>
     <TopNav title={title} onOpen={onOpen}/>
     <Container overflowX="hidden" h="calc(100vh-88px)" overFlow="auto" mt="6" maxW="70rem" color="#171717">{children}</Container>
    </Box>
    </Flex>
  )
}

export default DashboarLayout
