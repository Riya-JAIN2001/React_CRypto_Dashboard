import React from 'react'
import { Card, Flex,Button ,Icon,Tag} from '@chakra-ui/react'
import DsBoardLayout from '../../Components/DsBoardLayout'
import { AiOutlineDown } from 'react-icons/ai';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransTable from './Components/TransTable';
const Transaction = () => {
  const tabs=[
    {
      name:"All",
      count:349
    },
    {
      name:"Deposit",
      count:114
    },
    {
      name:"Widthdraw",
      count:55
    },
    {
      name:"Trades",
      count:222
    },
  ]

  return (
    <DsBoardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDown}/>}>Export CVS</Button>
      </Flex>
      <Card borderRadius="1rem">
      <Tabs>
  <TabList pt="4">
    {tabs.map((tab)=>(
<Tab key={tab.name} display="flex" gap="2">{tab.name} 
<Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag></Tab>
    )
          
    )}
    
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <TransTable/>
    </TabPanel>
    
  </TabPanels>
</Tabs>
      </Card>
    </DsBoardLayout>
    
  )
}

export default Transaction