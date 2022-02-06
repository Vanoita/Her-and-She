import React from 'react';

import {
    SimpleGrid,
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge
  } from '@chakra-ui/react';
const OppCard = ({oppdata}) => {
  return <>


    <SimpleGrid columns={1} spacing={2}>
      

  {

  oppdata.map((curElem) => {
        return(
    < >

    <Center>

      <Box
      maxW={'32 px'}
        w={'80%'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
          <SimpleGrid columns={2} spacing={2}>
          <Heading fontSize={'xl'} fontFamily={'body'}>
                {curElem.id}
            </Heading>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
                {curElem.job_title}
        </Heading>
    
        <Text  color={'gray.500'} fontSize={'2xl'} mb={4}>
                {curElem.company}
        </Text>

        <Text
          textAlign={'center'}
          color={'gray.700'}
          px={3}>
              {curElem.job_description}
        </Text>



        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={'purple.400'}
            rounded={'1g'}
            fontWeight={'400'}>
            {curElem.location}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'pink.400'}
            fontWeight={'400'}>
            {curElem.category}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'purple.400'}
            fontWeight={'400'}>
            {curElem.type}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={'pink.400'}
            fontWeight={'400'}>
            {curElem.apply_by}
          </Badge>
        </Stack>
        <Stack pt={'5'}>
        <Button

            fontSize={'sm'}
            rounded={'full'}
              bg={'red.200'}
              _hover={{ bg:'pink.400' }}
              px={'5'}
           
          >
            Contact
          </Button>

        </Stack>

 

          </SimpleGrid>


      </Box>
            
    </Center>


            
            
            </>

        )
        }) 
    }
    </SimpleGrid>
   

   
  </>;
};

export default OppCard;
