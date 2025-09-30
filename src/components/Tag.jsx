import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import useGIF from "../hooks/useGIF";
const Tag = () => {
  const [tag, setTag]=useState('');
  // const [loading, setLoading]=useState(true);
  // const [gif, setGif] = useState('');
  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url)
  //   const imageSource=data.data.images.downsized_large.url;
  //   console.log(imageSource)
  //   setGif(imageSource);
  //   setLoading(false)
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif, loading, fetchData}=useGIF(tag);
  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className="mt-[15px] flex flex-col items-center gap-y-5 bg-blue-500 w-1/2  mt-[50px] rounded-2xl border-2 border-blue-600">
      <h1 className="text-2xl underline uppercase font-bold">Random Gif</h1>
      {loading===true?<Loader/>:<img src={gif} width={450} />}
      <input className="w-10/12 bg-white py-2 rounded-lg mb-[3px] text-center" onChange={changeHandler} value={tag} />
      <button
        onClick={()=>fetchData(tag)}
        className=" mb-[15px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag