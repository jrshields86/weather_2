import './App.css';

const CurrentWeather = ({current, windDirection}) => {
    const iconData = current.weather;

    if (!iconData){
        return null;
    };

    const icon = iconData[0].icon;

    return (
        <div className='app'>
            <h1>Current Weather</h1>
            <div className='weatherContainer'>
                <div className='top'>
                    <p className='temp'>{Math.round(current.temp)}°F</p>
                    <p className='feelsLike'>Feels Like: {Math.round(current.feels_like)}°F</p>
                    <div className='iconInfo'>
                        <img alt='weather icon' className='weatherIcon' src={`icons/${icon}.png`}/>
                    </div>
                </div>
                <div className='bottom'>
                    <p>Pressure
                        <br/>
                        {current.pressure} hPa
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
                        {current.wind_gust} mph
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;