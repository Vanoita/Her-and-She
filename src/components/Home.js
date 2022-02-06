import React from 'react';
import { Stack, Box, Image, Flex, Heading, Text, Center, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import HomeImage from '../assests/Home.png'

function Home() {
    return (
        <div className="home">
            <Flex direction='column' alignItems='center'>
                <Heading fontSize={'4xl'}>Her & She</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    One-stop community for all the women
                </Text>
                <Stack direction={['column', 'row']} spacing='24px'>
                    <Box>
                        <Image src={HomeImage} boxSize={600} />
                    </Box>
                    <Box rounded={'lg'}
                        bg={'gray.100'}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Center p={8}>
                                <Button
                                    w={'full'}
                                    maxW={'md'}
                                    variant={'outline'}
                                    leftIcon={<FcGoogle />}>
                                    <Center>
                                        <Text>Sign in with Google</Text>
                                    </Center>
                                </Button>
                            </Center>
                            <Center p={8}>
                                <Button
                                    w={'full'}
                                    maxW={'md'}
                                    colorScheme={'facebook'}
                                    leftIcon={<FaFacebook />}>
                                    <Center>
                                        <Text>Continue with Facebook</Text>
                                    </Center>
                                </Button>
                            </Center>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>

        </div>
    )
}

export default Home;
