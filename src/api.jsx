const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;


const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${GEO_API_KEY}`,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export { geoApiOptions, GEO_API_URL };
