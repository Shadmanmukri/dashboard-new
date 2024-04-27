import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Icon, Stack, Text } from '@chakra-ui/react'
import { FaRupeeSign } from "react-icons/fa";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Grid,Flex,Divider,Button } from "@chakra-ui/react";
import { Fragment } from "react";




const Transactions = () => {
    const transactions =[
        {
            id:"1",
            icon:FaRupeeSign,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        },
        {
            id:"2",
            icon:PiCurrencyBtcFill,
            text:"BTC Sell",
            amount:"- 12.48513391 BTC",
            timestamp:"2022-05-27 12:32 PM"
        },
        {
            id:"3",
            icon:FaRupeeSign,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        }
    ]
  return (
    <CustomCard h="full">
    <Text mb="6" fontSize="sm" color="black.80">
    Recent Transactions

    </Text>
    <Stack spacing={4}>
        {transactions.map((transaction,i)=>(
            <Fragment key={transaction.id}>
            {i !== 0 && <Divider mt="4" />}
            <Flex key={transaction.id} gap="4" >
            <Grid placeItems="center" bg="black.5" boxSize={18} borderRadius="full">
            <Icon as={transaction.icon} />

            </Grid>
            <Flex justify="space-between" w="full">
            <Stack spacing={0}>
            <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>

            </Stack>
            <Text textStyle="h6">{transaction.amount}</Text>

            </Flex>

            </Flex>
            </Fragment>
            
        ))}
    </Stack>
    <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
      
    </CustomCard>
  )
}

export default Transactions
