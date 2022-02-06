import React,{useState} from 'react';
import { useDisclosure } from '@chakra-ui/react'
import Opp from "./OppurtunityApi";
import OppCard from './OppCard';
import {
    Heading,
    Button,
    Center,
    Stack,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormLabel,
    FormControl,
    Select,
    Textarea
  } from '@chakra-ui/react';

const Oppurtunities=()=> {
    const[oppdata,oppsetData] =useState(Opp);
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <> 
    <SimpleGrid columns={1} spacing={2} p={'5'}>
        <Center>
            <Heading fontSize={'4xl'} fontFamily={'body'} color={'pink.400'} p={10}>
                Oppurtunities
            </Heading>
            <Stack pt={'5'}>
                <Button onClick={onOpen} 
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.200'}
                _hover={{ bg:'pink.400' }}>
                Post an oppurtunity
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post an oppurtunity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <SimpleGrid columns={2} spacing={10}>
                <FormControl isRequired>
                    <FormLabel htmlFor='job_title'>Job Title</FormLabel>
                    <Input id='job_title' placeholder='Job Title' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='company'>Company</FormLabel>
                    <Input id='company' placeholder='Company Name' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='location'>Location</FormLabel>
                    <Input id='location' placeholder='Location' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='apply_by'>Apply By</FormLabel>
                    <Input id='apply_by' placeholder='Deadline' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='type'>Category</FormLabel>
                    <Select id='type' placeholder='Select category'>
                        <option>Tech</option>
                        <option>Business</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Engineering</option>
                        <option>Teaching</option>
                    </Select>
                    </FormControl>
                    <FormControl isRequired>
                    <FormLabel htmlFor='category'>Type</FormLabel>
                    <Select id='category' placeholder='Select type'>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Competition</option>
                    </Select>
                    </FormControl>
              </SimpleGrid>
              <FormControl isRequired py={5}> 
                    <FormLabel htmlFor='email'>Email-id</FormLabel>
                    <Input id='email' placeholder='Email-id' />
                </FormControl>
              <FormControl pt={5}>
                    <FormLabel htmlFor='description'>Description</FormLabel>
                    <Textarea placeholder='Description' />
                </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button bg='red.200' _hover={{ bg:'pink.400' }} mr={3} onClick={onClose}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            </Stack>

        </Center>
    <OppCard oppdata={oppdata} />  
    </SimpleGrid>  
    </>;
}

export default Oppurtunities;
