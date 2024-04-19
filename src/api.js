import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
const kitLat = 39.65;
const kitLong = -105.29;

const fetchWeather = async()=>{
    const response = await axios.get(
        `${BASE_URL}`
    );
    return response;
};

