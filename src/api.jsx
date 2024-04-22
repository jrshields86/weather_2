const lat = 39.65;
const lon = -105.29;

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;

export {API_KEY, BASE_URL};
