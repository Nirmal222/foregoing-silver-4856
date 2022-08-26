import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const url=`https://api.themoviedb.org/3/movie/${}?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
// https://api.themoviedb.org/3/movie/278/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US
const SingleMovie = () => {
  const params = useParams();
  console.log(params);
  const [key, setKey] = useState(null);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=aab69345023f012e488f5334e693cb59&language=en-US`
    ).then((res) => setKey(res.data.results[0].key));
  }, []);
  return (
    <Box>
      <video width="auto" height="auto" controls autoPlay>
        <source src='https://www.youtube.com/watch?v=az3gcaNjfbY' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default SingleMovie;
