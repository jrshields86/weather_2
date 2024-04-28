import './App.css';

const CurrentWeather = ({current, windDirection}) => {
    
    return (
        <div className='app'>
            <h1>Current Weather</h1>
            <div className='weatherContainer'>
                <div className='top'>
                    <p className='temp'>{Math.round(current.temp)}°F</p>
                    <p className='feelsLike'>Feels Like: {Math.round(current.feels_like)}°F</p>
                </div>
                <div className='bottom'>
                    <p>Pressure
                        <br/>
                        {(current.pressure * 0.025).toFixed(2)} in
                    </p>
                    <p>Humidity 
                        <br/>
                        {current.humidity} %
                    </p>
                    <p>Dew Point
                        <br/>
                        {Math.round(current.dew_point)} °F
                    </p>
                    <p>UV Index
                        <br/>
                        {Math.round(current.uvi)} of 11
                    </p>
                    <p>Wind
                        <br/>
                        {windDirection(current.wind_deg)} {current.wind_speed} mph
                    </p>
                    <p>Wind Gust
                        <br/>
                        {current.wind_gust.toFixed()} mph
                    </p>
                </div>
                {/* <p>Weather Description: {current.weather[0].description}</p>
                <p>Weather Icon: {current.weather[0].icon}</p>
                <p>Weather Main: {current.weather[0].main}</p>
                <p>Weather ID: {current.weather[0].id}</p> */}
            </div>
        </div>
    );
};

export default CurrentWeather;