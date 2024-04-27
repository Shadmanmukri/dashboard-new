import React from 'react'
import DashboarLayout from '../../components/DashboardLayout'
import { Card, HStack } from '@chakra-ui/react'
import { Flex,Button,Icon,Tabs,TabPanel,Tab,TabList,TabPanels,Tag,Input,Stack,InputRightElement,InputLeftElement,InputGroup } from '@chakra-ui/react'
import { IoIosDownload } from "react-icons/io";
import TransactionTable from './components/TransactionTable';
import { FiSearch } from "react-icons/fi";



const Transaction = () => {

  const tabs=[
    {
    name:"ALL",
    count: 349,

  },
  {
    name:"Deposit",
    count: 114,

  },
  {
    name:"Withdraw",
    count: 213,

  },
  {
    name:"Trade",
    count: 22,

  },
]
  return (
    <DashboarLayout>
     <Flex justify="end" mt="6" mb="3">
    <Button leftIcon={<Icon as= {IoIosDownload} />}>Export CSV</Button>
    </Flex>
    <Card borderRadius="16px">
    <Tabs>
  <TabList pt="4" display="flex" w="full" justifyContent="space-between">
  <HStack>
   {
    tabs.map((tab)=>(

      <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>

    ))
  }
  </HStack>
 

  <InputGroup maxW="200px"  pr="2">
    <InputLeftElement pointerEvents='none'>
      <Icon as={FiSearch } />
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' />
  </InputGroup>

 
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable />
    </TabPanel>
    <TabPanel>
      <TransactionTable />
    </TabPanel>
    <TabPanel>
    <TransactionTable />
    </TabPanel>
    <TabPanel>
      <TransactionTable />
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
</DashboarLayout>
  )
}

export default Transaction
