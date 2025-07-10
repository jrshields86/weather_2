import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import Forecast from './Forecast.jsx';
import SunriseSunset from './SunriseSunset.jsx';
import MoonriseMoonset from './MoonriseMoonset.jsx';
import { api } from './api.jsx';
import TodaysForecast from './TodaysForecast.jsx';
import Alerts from './Alerts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hourly from './Hourly.jsx';


function App() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setUserLat(coords.latitude.toFixed(2));
        setUserLon(coords.longitude.toFixed(2));
      });
    }
  }, []);
  
  useEffect(() => {
    if (userLat != null && userLon != null) {
      axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?
          lat=${userLat}&lon=${userLon}
          &appid=${API_KEY}
          &units=imperial`)
        .then(res => {
          setCurrent(res.data.current);
          setForecast(res.data);
        })
        .catch(console.error);
    }
  }, [userLat, userLon]);

  function success(pos) {
    const crd = pos.coords;
    const lat = (crd.latitude).toFixed(2);
    const lon = (crd.longitude).toFixed(2);
    setUserLat(lat);
    setUserLon(lon);
  };
  
  const locationData = async(lat, lon) => {
    const userLogOnResponse = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);
  
    Promise.all([userLogOnResponse])
    .then(async (response) => {
      const instantUserResponseCurrent = await response[0].data.current;
      const instantUserResponse = await response[0].data;
      setCurrent({...instantUserResponseCurrent});
      setForecast({...instantUserResponse});
    })
    .catch((err) => console.log(err));
  };
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);
    
    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        
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
    <div className='appContainer'>
      <div className='appHeader'>
        Joe's Weather Service
      </div>
      <div className='searchAndLocationContainer'>
        <div className='searchBox'>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
      </div>
      <div className='locationDisplayContainer'>
          <p>{current.city ? current.city : 'Your Location'}</p>
      </div>
      <div>
        {current && <CurrentWeather forecast={forecast} current={current} windDirection={windDirection} />}
      </div>  
      {/* <div>
        <Alerts forecast={forecast} />
      </div> */}
      <div>
        <Hourly forecast={forecast} />
      </div>
      <div>
        <TodaysForecast forecast={forecast} windDirection={windDirection} />
      </div>
      <div>
        {forecast && <Forecast  forecast={forecast} windDirection={windDirection} />}
      </div>
      <div>
        <SunriseSunset forecast={forecast} />
      </div>
      {/* <div>
        <MoonriseMoonset forecast={forecast} />
      </div> */}
    </div>
  )
}

export default App;
