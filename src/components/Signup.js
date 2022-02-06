import React from 'react';
import { Stack, Box, Button, FormControl, HStack, FormLabel, Input, Center } from '@chakra-ui/react'

function Signup() {
    return <div className='signup-ctn'>
        <Center bg={'gray.100'} height='100vh'>
            <Box
                rounded={'lg'}
                bg={'white'}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <HStack>
                        <Box>
                            <FormControl id="fullName" isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="dob" isRequired>
                                <FormLabel>Date of Birth</FormLabel>
                                <Input type="date" />
                            </FormControl>
                        </Box>
                    </HStack>
                    <FormControl id="idProof" isRequired>
                        <FormLabel>Upload any Id Proof to verify your Identity</FormLabel>
                        <Input type="file" />
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    </div>;
}

export default Signup;
