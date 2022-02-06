import React from 'react';
import { Stack, Box, Image, Flex, Heading } from '@chakra-ui/react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import HomeImage from '../assests/Home.png'

function Home() {
    return (
        <div className="home">
            <Flex direction='column' alignItems='center'>
                <Heading>Her & She</Heading>
                <Stack direction={['column', 'row']} spacing='24px'>
                    <Box>
                        <Image src={HomeImage} boxSize={600} />
                    </Box>
                    <Box>
                    </Box>
                </Stack>
            </Flex>

        </div>
    )
}

export default Home;
