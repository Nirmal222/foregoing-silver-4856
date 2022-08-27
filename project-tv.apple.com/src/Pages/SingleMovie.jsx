import { AspectRatio, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Navbar from '../components/HomePageComponents/Navbar'
// const url=`https://api.themoviedb.org/3/movie/${}?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
// https://api.themoviedb.org/3/movie/278/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US
const SingleMovie = () => {
  const params = useParams();
  // console.log(params);
  const [key, setKey] = useState(null);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
    ).then((res) => console.log(res.data.results));
  }, []);
  return (
    <Box>
      <Navbar/>
      <Box>
      <ReactPlayer width={'100vw'} height={'100vh'} playing={true} muted={true} url={`https://www.youtube.com/watch?v=-h9LE3w8i-E`}></ReactPlayer>
      <Text></Text>
      </Box>
     </Box>
  );
};

export default SingleMovie;
