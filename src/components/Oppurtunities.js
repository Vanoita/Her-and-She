import React,{useState} from 'react';
import Opp from "./OppurtunityApi";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';

const Oppurtunities=()=> {
    const[oppdata,oppsetData] =useState(Opp);
    return <>
    {   
    oppdata.map((curElem) => {
        return(
            <>
    <Center py={6} key={curElem.id}>
      <Box
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                curElem.id
            </Heading>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
                curElem.job_title
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
                curElem.company
        </Text>
        <Text
          textAlign={'center'}
          color={'gray.700'}
          px={3}>
              curElem.job_description
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={'gray.50'}
            fontWeight={'400'}>
            curElem.location
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'gray.50'}
            fontWeight={'400'}>
            curElem.category
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'gray.50'}
            fontWeight={'400'}>
            curElem.type
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'gray.50'}
            fontWeight={'400'}>
            curElem.apply_by
          </Badge>
        </Stack>

      </Box>
    </Center>

            
            
            </>

        )
        }) 
   

   


    }
        
    </>;
}

export default Oppurtunities;
