import React from 'react';
// Chakra Components
import { Box, Text } from '@chakra-ui/react'
import Navbar from '../components/HomePageComponents/Navbar'
import Banner from '../components/HomePageComponents/Banner' 
import Carousel from '../Utils/Carousel';
const HomePage = () => {
    return (
        <Box 
        overflow={'hidden'}
        bg={'#2d2c2d'}
        >
            <Navbar/>
            <Banner/>
            <Box  className='card'>
            <Carousel />
            </Box>
            <center>
            <hr color='gray' width={'80%'} / >
            </center>
            <Box  className='card'>
            <Carousel />
            </Box>
        </Box>
    );
}

export default HomePage;
