import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurrentWeather from './CurrentWeather';

function App() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


useEffect(()=> {
  const fetchWeather = async()=>{
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=39.65&lon=-105.29&exclude={part}&appid=${API_KEY}&units=imperial`);
    const weatherData = response.data.current;
    const forecastData = response.data.daily;
    setCurrent(weatherData);
    setForecast(forecastData);
  };
  fetchWeather();
}, []);

console.log(current);

  return (
    <>
      {current && <CurrentWeather current={current} />}
    </>
  )
}

export default App;
