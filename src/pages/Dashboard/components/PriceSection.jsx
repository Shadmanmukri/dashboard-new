import {
    HStack,
    Stack,
    Text, Icon,Flex,Image } from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'
import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from '@chakra-ui/react';
import { FaPlusCircle ,FaMinusCircle   } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const PriceSection = () => {
   const timestamps =["7:15 PM" , "7:55 PM", "8:55 PM","9:55 PM","10:55 PM"]
  return (
    <CustomCard>
    <Flex justify="space-between" align="start">
     <Stack>
    <HStack color="black.80">
    <Text fontSize="sm" >Wallet Balances</Text>
    </HStack>
    <HStack spacing={4}
    align={{
        base:"flex-start",
        sm:"center"
    }}
    flexDir={{
        base:"column",
        sm:"row",
    }}>
    <HStack>
    <Text textStyle="h2" fontWeight="medium">22.39401000</Text>{" "}
    <HStack fontWeight="medium" color="green.400">
    <Icon as={BsArrowUpRight} />
    <Text fontSize="sm" fontWeight="medium">22%</Text>
    </HStack>{" "}
    </HStack>
    </HStack>

    </Stack>
    <HStack>
    <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
    <Button leftIcon={<Icon as={FaMinusCircle  } />}>Sell</Button>

    </HStack>
    </Flex>
    <Tabs variant='soft-rounded' >
    <Flex justify="end" >
     <TabList bg="black.5" p="3px">
     {
  ["1H", "1D", "1W", "1M"].map((tab) => (
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}  key={tab} fontSize="sm" p="6px" borderRadius="4">
      {tab}
    </Tab>
  ))
}

   
  </TabList>
  </Flex>
 
  <TabPanels>
    <TabPanel>
    <Image w="100%" src="./Graph.svg" mt="3rem"/>
    <HStack justify="space-between">
    {timestamps.map((timestamp) => (
        <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
        </Text>
    ))}
</HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    
    </CustomCard>
  )
}

export default PriceSection
