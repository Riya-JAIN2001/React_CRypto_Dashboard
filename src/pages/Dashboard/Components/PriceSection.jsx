import { Image, Card, HStack,Stack,Text,Icon,Button,Flex} from '@chakra-ui/react'
import React from 'react'
import { CustumCard } from '../../../Chakra/CustumCards'
import {BsArrowUpRight} from "react-icons/bs";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const PriceSection = () => {
    const timestamps=["7:15 PM","7:55 PM","8:55 PM","9:55 PM","10:55 PM"]
  return (
    <CustumCard>
        <Flex justify="space-between" align="start">
    
    <Stack >
        <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>

         </HStack>
         
         <HStack spacing={2}
         align={{base:"flex-start",
         sm:"row"}}>
            <HStack>
                <Text textStyle="h2" fontWeight="medium">
                    $ 22.39401000
                </Text>(" ")
                <HStack fontWeight="medium" color="green.500">

                    <Icon as={BsArrowUpRight}/>
                    <Text fontSize="sm" fontWeight="medium">
                     22%
                </Text></HStack>(" ")
                 </HStack>
         
            </HStack>
    </Stack>
    <HStack>
        <Button>Buy</Button>
        <Button>Sell</Button>
    </HStack>
    
    </Flex>
    <Tabs variant='soft-rounded' >
  <Flex justify="end" >
  <TabList bg="black.5" p="3px" >
    {
        ["1H","1D","1W","1M"].map((tab)=>(
            <Tab _selected={{ bg:  'white', }}
             key={tab} fontSize="sm" p="6px" borderRadius={4}>
                {tab}
            </Tab>
        ))
    }
   
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
    <Image  w="100%"src ="/graph.svg" mt="3rem"/>
    <HStack justify="space-between">
        {
            timestamps.map((timestamp)=>(
                <Text key={timestamp} fontSize="sm" color="black.80">
                   {timestamp} 

                </Text>
            ))
        }
    </HStack>
    </TabPanel>
    <TabPanel>
    <Image  w="100%"src ="/graph.svg" mt="48px"/>
    <HStack justify="space-between">
        {
            timestamps.map((timestamp)=>(
                <Text key={timestamp} fontSize="sm" color="black.80">
                   {timestamp}

                </Text>
            ))
        }
    </HStack>
    </TabPanel>
    <TabPanel>
    <Image  w="100%"src ="/graph.svg" mt="48px"/>
    <HStack justify="space-between">
        {
            timestamps.map((timestamp)=>(
                <Text key={timestamp} fontSize="sm" color="black.80">
                   {timestamp}

                </Text>
            ))
        }
    </HStack>
    </TabPanel>
    <TabPanel>
    <Image  w="100%"src ="/graph.svg" mt="48px"/>
    <HStack justify="space-between">
        {
            timestamps.map((timestamp)=>(
                <Text key={timestamp} fontSize="sm" color="black.80">
                   {timestamp}

                </Text>
            ))
        }
    </HStack>
    </TabPanel>
  </TabPanels>
</Tabs>


    
    </CustumCard>
  )
}

export default PriceSection