import Slider from "react-slick";
import React, { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import getData from "../API/MovieAPI";
import { Box, Text } from "@chakra-ui/react";

const Carousel = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  
//   https://image.tmdb.org/t/p/original/[poster_path]
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(2).then((res) => setData(res.data.results));
  }, []);
  console.log(data);
  return (
    <Box >
      <Text fontWeight={'bold'} ml={['15vw','2vw','5vw','3vw']} mb={'20px'} fontSize={'xl'} color={'white'}>Most Popular Now</Text>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <Box w={['200px','200px','100px']} key={item.id}>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" />
              </Box>
            )
          })}
      </Slider>
    </Box>
  );
};

export default Carousel;
