import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import Forecast from './Forecast.jsx';
import SunriseSunset from './SunriseSunset.jsx';
import MoonriseMoonset from './MoonriseMoonset.jsx';
import { api } from './api.jsx';

function App() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    async function userData(){
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${userLat}&lon=${userLon}&exclude={part}&appid=${API_KEY}&units=imperial`);
      setCurrent(response.data.current);
      setForecast(response.data);
    }
    userData();
  }, [userLat, userLon]);

  function userLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  };
  userLocation();

  function success(pos) {
    const crd = pos.coords;
    const lat = (crd.latitude).toFixed(2);
    const lon = (crd.longitude).toFixed(2);
    setUserLat(lat);
    setUserLon(lon);
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}&units=imperial`);
    
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        
        const weatherResponse = await response[0].data.current;
        const fullWeatherResponse = await response[0].data;
        console.log(fullWeatherResponse);
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
      <MoonriseMoonset />
      <SunriseSunset forecast={forecast}/>
      <div className='locationDisplayContainer'>
        <div className='locationDisplay'>
          <p>{current.city ? current.city : 'Your Location'}</p>
        </div>
      </div>

      {current && <CurrentWeather current={current} windDirection={windDirection} />}
      {forecast && <Forecast  forecast={forecast} windDirection={windDirection} />}
    </div>
  )
}

export default App;
