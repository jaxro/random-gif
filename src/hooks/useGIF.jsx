import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGIF = (tag) => {
  {
    /**this is my custom hook */
  }
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState("");
  async function fetchData(tag) {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(tag?`${url}&tag=${tag}`: url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
 return{
    gif, loading, fetchData
 };
  
};

export default useGIF;
