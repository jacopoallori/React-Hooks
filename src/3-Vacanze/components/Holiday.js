import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data , setData] = useState([]);
  const [selected, setSelected] = useState(0);

  //funzione per sceglire prossimo valore di selected e la prossima vacanza
  const nextHoliday = () => {
    console.log("Next " + selected);
    setSelected(prevValue =>{
      if(prevValue +1 === data.data.length){
        return 0;
      }
      else{
        return prevValue+1;
      }  
    })
  }

  //funzione per diminuire valore di selected e passare alla precedente vacanza
  const prevHoliday = () => {
    console.log("Pre " + selected);
    setSelected(prevValue =>{
      if(prevValue -1 < 0 ){
        return data.data.length-1;
      }
      else{
        return prevValue -1;
      }  
    })
  }

  //Funzione per fetch dati api
  const getData = async () =>{
    try{
      const response = await axios.get(url);
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
  },[])

  if(data.success){
    return <>
    {
      data.data.length > 0 ? 
      <SingleHoliday {...data.data[selected]} 
        next={nextHoliday} 
        prev={prevHoliday}/> 
      : <h4>No Vacanze</h4>
    }
    </>
  }else{
    return <div>...Loading</div>;
  }
};

export default Holiday;