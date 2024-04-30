import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurrentWeather from './CurrentWeather';
import Search from './Search';

function App() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  

  // useEffect(()=> {
  //   const fetchWeather = async()=>{
  //     const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=39.65&lon=-105.29&exclude={part}&appid=${API_KEY}&units=imperial`);
  //     console.log(response.data);
  //     const todayWeatherData = response.data.current;
  //     const weatherData = response.data;
  //     setCurrent(todayWeatherData);
  //   };
  //   fetchWeather();
  // }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=imperial`);
  
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        console.log(response);
        const weatherResponse = await response[0].data.current;
        setCurrent({city: searchData.label , ...weatherResponse});
      })
      .catch((err) => console.log(err));
  };

  function windDirection(deg) {
    if (deg > 337.5 || deg <= 22.25) {
        return 'N'
    } else if (deg > 22.25 && deg <= 67.5) {
        return 'NE'
    } else if (deg > 67.5 && deg <= 112.5) {
        return 'E'
    } else if (deg > 112.5 && deg <= 157.5) {
        return 'SE'
    } else if (deg > 157.5 && deg <= 202.5) {
        return 'S'
    } else if (deg > 202.5 && deg <= 247.5) {
        return 'SW'
    } else if (deg > 247.5 && deg <= 292.5) {
        return 'W'
    } else if (deg > 292 && deg <= 337.5) {
        return 'NW'
    }
  };

 console.log(current);

  return (
    <div>
      <p></p>
      <Search onSearchChange={handleOnSearchChange} />
      {current && <CurrentWeather current={current} windDirection={windDirection} />}
    </div>
  )
}

export default App;
