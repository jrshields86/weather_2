import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

// const lat = 39.65;
// const lon = -105.29;
// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
// const BASE_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
// console.log(BASE_URL);  


  const fetchWeather = async()=>{
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=39.65&lon=-105.29&exclude={part}&appid=${API_KEY}`);
    console.log(response.data);
};
fetchWeather();

  return (
    <>
      <h1>hello world</h1>
    </>
  )
}

export default App
