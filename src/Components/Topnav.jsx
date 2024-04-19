import { Flex , Container, Heading, HStack, Box} from '@chakra-ui/react'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Icon,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { FaUserTie } from "react-icons/fa"; 
const Topnav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
    <HStack mx="auto" maxW="70rem"  h="16" justify="space-between" >
        <Icon as={FaBars} onClick={onOpen} display={{base:"block",
    lg:"none"}}/>
            <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
            <Menu>
  <MenuButton >
    <Icon as={FaUserTie} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
    
  </MenuList>
</Menu>  
       
    </HStack>
    </Box>
  )
}

export default Topnav