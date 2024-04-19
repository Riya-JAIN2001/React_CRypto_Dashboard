import { HStack,Stack,Icon ,Text,Tag, Button} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineInfoCircle} from "react-icons/ai"
const Portfolio = () => {
  return (
    <HStack  justify ="space-between"bg="white" borderRadius="xl" p="6" align={{
        base:"flex-start",
        xl:"center",
    }} flexDir={{base:"column",xl:"row"}}>
        <HStack spacing={{base:"0",xl:"16"}} align={{
        base:"flex-start",
        xl:"center",
    }} flexDir={{base:"column",xl:"row"}}><Stack>
            <HStack color="black.80">
                <Text fontSize="sm" >Total Portfolio Value</Text>
             <Icon as={AiOutlineInfoCircle}/></HStack>
             <Text textStyle="h2" fontWeight="medium">$ 112, 312.24</Text>
        </Stack>
        
        <Stack >
            <HStack color="black.80">
                <Text fontSize="sm">Wallet Balance</Text>

             </HStack>
             
             <HStack spacing={2}><HStack><Text textStyle="h2" fontWeight="medium">$ 22.39401000</Text><Tag colorSceme="gray">BTC</Tag> </HStack>
             <HStack><Text textStyle="h2" fontWeight="medium">$ 1300.00</Text><Tag colorSceme="gray">INR</Tag> </HStack></HStack>
        </Stack></HStack>
        <HStack>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default Portfolio