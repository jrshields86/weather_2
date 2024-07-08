import axios from "axios";

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;

const WEATHER_BASE_URL = `https://api.openweathermap.org/data/3.0/onecall`;

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${GEO_API_KEY}`,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const api = {
	geoApiOptions,
	GEO_API_URL,
	WEATHER_BASE_URL
}

export { api };
