import React from 'react'
import { CustumCard } from '../../../Chakra/CustumCards'
import { Tag, Text } from '@chakra-ui/react'
const InfoCard = ({imageUrl, text,tagText,inverted}) => {
  return (
    <CustumCard bgImage={imageUrl} bgSize="cover" 
    bgColor={inverted? "p.purple":"white"}
    bgRepeat="no-repeate">

        <Tag bg={inverted? "white":"p.purple"} color={inverted? "p.purple":"white"} borderRadius="full">{tagText}</Tag>
        <Text  mt ="4" fontWeight="medium"textStyle ="h5" color={inverted? "white":"p.purple"}>
         {text}
        </Text>
    </CustumCard>
  )
}

export default InfoCard