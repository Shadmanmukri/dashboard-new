import React from 'react'
import { Tag,Text } from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'

const InfoCard = ( {ImgUrl,text,tagText,inverted} ) => {
  return (
    <CustomCard  bgColor={inverted ? "p.purple" : "white"} bgImage={ImgUrl} bgSize="cover" bgRepeat="no-repeat">
    <Tag   color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"} borderRadius="full">
    {tagText}

    </Tag>
    <Text mt="4" fontWeight="medium" textStyle="h5" color={inverted ? "white" : "black"}>

    {text}

    </Text>
      
    </CustomCard>
  )
}

export default InfoCard
