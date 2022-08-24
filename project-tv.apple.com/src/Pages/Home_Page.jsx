import React from 'react';
// Chakra Components
import { Box } from '@chakra-ui/react'
import Navbar from '../components/HomePageComponents/Navbar'
import Banner from '../components/HomePageComponents/Banner' 
const HomePage = () => {
    return (
        <Box 
        overflow={'hidden'}
        >
            <Navbar/>
            <Banner/>
            
        </Box>
    );
}

export default HomePage;
