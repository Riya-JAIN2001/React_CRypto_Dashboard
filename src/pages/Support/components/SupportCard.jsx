import { Flex,Stack,HStack, Text,Icon,Card ,Textarea, Box,Button} from '@chakra-ui/react'
import {IoMdMail} from "react-icons/io"
import React from 'react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex gap={6} 
    flexDir={{
        base:"column",
        md:"row"
    }}>
        <Stack maxW="380px" >
            <Icon as={icon} boxSize={6} color="p.purple"/>
            <Text fontWeight="medium"as="h1"textStyle="h1">
               {title}
                </Text>
            <Text fontSize="sm" color="black.60">
             {text}
                </Text>
        </Stack>
       <Box  w="full" justify="space-Between" > {leftComponent}</Box>
    </Flex>
  )
}

export default SupportCard