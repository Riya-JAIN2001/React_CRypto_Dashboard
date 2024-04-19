import React from 'react'
import Sidenav from '../../Components/Sidenav'
import Topnav from '../../Components/Topnav'
import { Flex,Box, GridItem,Grid } from '@chakra-ui/react'
import DsBoardLayout from '../../Components/DsBoardLayout'
import Portfolio from './Components/Portfolio'
import PriceSection from './Components/PriceSection'
import Transactopn from './Components/Transactopn'
import InfoCard from './Components/InfoCard'

const Dashboard = () => {
  return (
    <DsBoardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base:"repeat(1,1fr)",
       xl:"repeat(2,1fr)",
      }}
      gap={6}

      >
        <GridItem colSpan={{
          base:1,
          lg:2
        }}><Portfolio/></GridItem>
        <GridItem colSpan={1}><PriceSection/></GridItem>
        <GridItem colSpan={1}><Transactopn/></GridItem>
        <GridItem colSpan={1}><InfoCard imageUrl="/dot_bg.svg" tagText="Loan" text="Learn more about Loans-Keep your Bitcoin, access it's value without selling it" inverted={false}/></GridItem>
        <GridItem colSpan={1}><InfoCard imageUrl="/grid_bg.svg" tagText="Contact"  text="Learn more about Loans-Keep your Bitcoin, access it's value without selling it" inverted={true}/></GridItem>
      </Grid>
      
      
      </DsBoardLayout>
  )
}

export default Dashboard