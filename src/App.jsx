import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

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
