import React from 'react'
import DsBoardLayout from '../../Components/DsBoardLayout'
import SupportCard from './components/SupportCard';
import {IoMdMail} from "react-icons/io"
import ContactCard from '../Transaction/Components/ContactCard';
import InfoCard from '../Dashboard/Components/InfoCard';
import { AiTwotoneMessage } from 'react-icons/ai';
import { Stack } from '@chakra-ui/react';
const Support = () => {
  return (
     <DsBoardLayout> 
      <Stack spacing="20px">
      <SupportCard 
      leftComponent={<ContactCard/>} 
      title="Contact Us" 
      text="Have a questionor just want to know more? Feel free to reach out to us.
"     icon={IoMdMail}/>
<SupportCard 
leftComponent={<InfoCard
imageUrl="/grid_bg.svg"
inverted={true}
tagText="Contact"
text="Learn more about our real state"/>} 
title="Live Chat" 
text="Don't have time to wait for answer?Chat with us now.
"   icon={AiTwotoneMessage}/>
</Stack>
      </DsBoardLayout>
  )
}

export default Support