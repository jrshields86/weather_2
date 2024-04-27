import './App.css';

const CurrentWeather = ({current}) => {
    console.log(current);
    return (
        <>
            <h1>Current Weather</h1>
            <div className='weatherContainer'>
                <p>Temp: {Math.round(current.temp)}°F</p>
                <p>Feels Like: {Math.round(current.feels_like)}°F</p>
                <p>Pressure: {current.pressure} hPa</p>
                <p>Humidity: {current.humidity}%</p>
                <p>Dew Point: {Math.round(current.dew_point)}°F</p>
                <p>UV Index: {Math.round(current.uvi)} of 11</p>
                <p>Wind Speed: {current.wind_speed} mph</p>
                <p>Wind Direction: {current.wind_deg} °</p>
                <p>Wind Gust: {current.wind_gust} mph</p>
                {/* <p>Weather Description: {current.weather[0].description}</p>
                <p>Weather Icon: {current.weather[0].icon}</p>
                <p>Weather Main: {current.weather[0].main}</p>
                <p>Weather ID: {current.weather[0].id}</p> */}
                {/* <p>Snow in Last Hour: {Object.values(current.snow)} mm/hr</p> */}
            </div>
        </>
    );
};

export default CurrentWeather;