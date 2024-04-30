import './App.css';

const CurrentWeather = ({current, windDirection}) => {
    const iconData = current.weather;

    if (!iconData){
        return null;
    };

    const icon = iconData[0].icon;
    const description = iconData[0].main;

    return (
        <div className='app'>
            <div className='weatherContainer'>
                <div className='topContainer'>
                    <div className='top-left'>
                        <p className='temp'>{Math.round(current.temp)}°F</p>
                        <p className='feelsLike'>Feels Like: {Math.round(current.feels_like)}°F</p>
                    </div>    
                    <div className='top-right'>
                        <img alt='weather icon' className='weatherIcon' src={`icons/${icon}.png`}/>
                        <p className='description'>{description}</p>
                    </div>
                </div>
                <div className='bottomContainer'>
                    <div className='bottomUpper'>
                        <div>
                            <p className='detailTitle'>Pressure</p>
                            <p className='detailValue'>{(current.pressure * 0.025).toFixed(2)} in</p>
                        </div>

                        <div>
                            <p className='detailTitle'>Humidity </p>
                            <p className='detailValue'>{current.humidity} %</p>
                        </div>

                        <div>
                            <p className='detailTitle'>Dew Point</p>
                            <p className='detailValue'>{Math.round(current.dew_point)} °F</p>
                        </div>

                    </div>
                    <div className='bottomLower'>
                        
                        <div>
                            <p className='detailTitle'>UV Index</p>
                            <p className='detailValue'>{Math.round(current.uvi)} of 11</p>
                        </div>

                        <div>
                            <p className='detailTitle'>Wind</p>
                            <p className='detailValue'>{windDirection(current.wind_deg)} {current.wind_speed} mph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;