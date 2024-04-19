import React from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Flex,Stack,HStack, Text,Icon,Card ,Textarea, Box,Button} from '@chakra-ui/react'
import {IoMdMail} from "react-icons/io"
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
    <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
        You will receive response within 24 hours of time of submit.
    </Text>

    <HStack flexDir={{
base:"column",
xl:"row"
}}>
    <FormControl>
<FormLabel>Name</FormLabel>
<Input placeholder="Enter Your Name" />

</FormControl>
<FormControl>
<FormLabel>Surname</FormLabel>
<Input placeholder="Enter Your Last Name" />

</FormControl>
    </HStack>
    <FormControl>
<FormLabel>E-mail</FormLabel>
<Input placeholder="Enter Your email" />

</FormControl>   
<FormControl>
<FormLabel>Message</FormLabel>
<Textarea type="email" placeholder="Enter the message."/>

</FormControl>  
<Checkbox defaultChecked fontSize="xs"> <Text>
I agree with <Box as="span" color="p.purple">Terms & Conditions.
</Box>
</Text>
</Checkbox>
<Stack>
    <Button fontSize="sm">Send a Message</Button>
    <Button fontSize="sm" colorScheme="gray">Book a Meeting</Button>
</Stack>

    </Stack>
</Card>
  )
}

export default ContactCard