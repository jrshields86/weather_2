import '../App.css';

const CurrentWeather = ({current, windDirection}) => {
    const iconData = current.weather;

    if (!iconData){
        return null;
    };

    const icon = iconData[0].icon;
    const description = iconData[0].description;

    return (
        
            <div className='panel flex flex-col gap-1'>
                <h2 className='currentWeatherHeader'> Current Weather </h2>
                <div className='flex wrap justify-evenly items-center gap-1'>

                        <div className='flex wrap justify-around grow items-center gap-1'>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <p className='temp'>{Math.round(current.temp)}°F</p>
                                <p className='feelsLike'>Feels Like: {Math.round(current.feels_like)}°F</p>
                            </div>    
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <img alt='weather icon' className='currentWeatherIcon' src={`icons/${icon}.png`}/>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='description'>{description}</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex wrap justify-around grow gap-1'>
                            <div id='currentWeatherWind'>
                                <p className='detailTitle'>Wind</p>
                                <p className='detailValue'>{windDirection(current.wind_deg)} {Math.round(current.wind_speed)} mph</p>
                            </div>
                            <div id='currentWeatherClouds'>
                                <p className='detailTitle'>Clouds</p>
                                <p className='detailValue'>{current.clouds}%</p>
                            </div>
                        </div>

                        {/* <div>
                            <p className='detailTitle'>Humidity </p>
                            <p className='detailValue'>{current.humidity} %</p>
                        </div> */}
                        
                        {/* <div className='bottomMiddle'>
                            <div>
                                <p className='detailTitle'>Dew Point</p>
                                <p className='detailValue'>{Math.round(current.dew_point)} °F</p>
                            </div>
                        </div> */}
                    
                    {/* <div className='bottomLowerContainer'>
                            <div>
                                <p className='detailTitle'>UV Index</p>
                                <p className='detailValue'>{Math.round(current.uvi)} of 11</p>
                            </div>
                            <div>
                                <p className='detailTitle'>Pressure</p>
                                <p className='detailValue'>{(current.pressure * 0.025).toFixed(2)} in</p>
                            </div>
                    </div> */}
                    
                </div>
            </div>
        
    );
};

export default CurrentWeather;