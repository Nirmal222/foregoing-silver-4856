import React from 'react';
import { background, Box, Text } from '@chakra-ui/react'
const Footer = () => {
    return (
        <Box>
            <Box>
                
                <Box 
                 w={'100px'}
                 h={'100px'}
                 bg={'url(https://tv.apple.com/assets/brands/TV_App_Logo-d343000dfd3ca454ca8705a7aa7dcf4f.png)'
                 }
                 backgroundRepeat={'no-repeat'}
                 backgroundSize={'cover'}
                 border={'1px solid white'}
                 ></Box>

                <Box>
                  <Text color='white' fontWeight={'700'} fontSize={'4xl'}>Watch Apple TV+ here  or <br /> anywhere.</Text>
                </Box> 
                
                <Box>
                    <Text color={'white'} fontSize={'xl'}>
                       Find Apple TV+ on the Apple TV app, available on Apple devices, smart <br /> TVs, and more.
                    </Text>
                </Box>
                

            </Box>
            <Box></Box>
        </Box>
    );
}

export default Footer;
