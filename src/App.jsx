import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import Forecast from './Forecast.jsx';

function App() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=imperial`);
    
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        console.log(response.data);
        const weatherResponse = await response[0].data.current;
        const fullWeatherResponse = await response[0].data;
        setCurrent({city: searchData.label , ...weatherResponse});
        setForecast({city: searchData.label , ...fullWeatherResponse});
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

  return (
    <div>
      <div className='searchBox'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <h2 className='currentTitle'>Current Weather for: {current.city}</h2>
      {current && <CurrentWeather current={current} windDirection={windDirection} />}
      {forecast && <Forecast  forecast={forecast} windDirection={windDirection} />}
    </div>
  )
}

export default App;
