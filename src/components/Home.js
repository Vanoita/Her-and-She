import React from 'react';
import { Stack, Box, Image, Flex, Heading, Text, Center, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import HomeImage from '../assests/Home.png'
import "firebase/app"
import { signInWithGoogle } from '../service/firebaseConfig';

function Home() {


    return (
        <div className="home">
            <Flex direction='column' alignItems='center' bg='gray.100' height='100vh'>
                <Heading fontSize={'4xl'}>Her & She</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    One-stop community for all the women
                </Text>
                <Box rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}>
                    <Text>Join our Community</Text>
                    <Center p={8}>
                        <Button
                            w={'full'}
                            maxW={'md'}
                            variant={'outline'}
                            leftIcon={<FcGoogle />}
                            onClick={signInWithGoogle}
                        >
                            <Center>
                                <Text>Sign in with Google</Text>
                            </Center>
                        </Button>
                    </Center>
                </Box>
                <Box>
                    <Image src={HomeImage} boxSize={600} />
                </Box>
            </Flex>
        </div>
    )
}

export default Home;
