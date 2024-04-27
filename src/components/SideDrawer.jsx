import React from 'react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,DrawerBody} from "@chakra-ui/react";
import Sidenav from './Sidenav';

const SideDrawer = ({ isOpen, onClose}) => {
   
  
    return (
      <>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="#171717"/>
  
            <DrawerBody>
            <Sidenav />
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer
