import '../App.css'

const TodaysForecast = ({forecast, windDirection}) => {
    if (!forecast.daily) {
        return null;
    };
    
    const todayData = forecast.daily[0];
    const todayTemp = {
        day: Math.round(todayData.temp.day),
        evening: Math.round(todayData.temp.eve),
        max: Math.round(todayData.temp.max),
        min: Math.round(todayData.temp.min),
        morning: Math.round(todayData.temp.morn),
        night: Math.round(todayData.temp.night)
    };
    const todayFeelsLike = {
        day: Math.round(todayData.feels_like.day),
        evening: Math.round(todayData.feels_like.eve),
        morning: Math.round(todayData.feels_like.morn),
        night: Math.round(todayData.feels_like.night)
    };
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(todayData.dt * 1000).toDateString();
    const day = new Date(todayData.dt * 1000).getDay();
    const todayDay = daysOfWeek.find((el, idx) => idx === day); 
    const todaySummary = todayData.summary;
    const todayClouds = todayData.clouds;
    const todayDewPoint = Math.round(todayData.dew_point);
    const todayHumidity = todayData.humidity;
    const todayPOP = Math.round(todayData.pop * 100);
    const todayPressure = (todayData.pressure * 0.025).toFixed(2);
    const todayRain = todayData.rain;
    const todayWindDeg = todayData.wind_deg;
    const todayWindGust = todayData.wind_gust;
    const todayWindSpeed = todayData.wind_speed;
    const todayIcon = todayData.weather[0].icon;
    const todayDirection = windDirection(todayData.wind_deg);


    return (
            <div className="panel flex flex-col items-center gap-1">
                <div className='todaysForecastHeader'>
                    Today's Forecast
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='todayForecastDateDayContainer'>
                        <div className='todaysForecastDate'>
                            {date}
                        </div>
                    </div>
                    <div className='todaysForecastIconContainer'>
                        <img alt='weather icon' className='todaysForecastIcon' src={`icons/${todayIcon}.png`}/>
                    </div>
                    <div className='todaysForecastSummaryContainer'>
                        <p className='todaysForecastSummary'>{todaySummary}</p>
                    </div>           
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-col items-center gap-1'>
                        <div className='todaysForecastWind'>
                            <p className='detailTitle'>Wind:</p>
                            <p className='detailValue'>{todayDirection} {Math.round(todayData.wind_speed)} mph</p>
                        </div>
                        <div className='todaysForecastPop'>
                            <img alt='raindrop icon' className='todaysForecastRaindropIcon' src={`icons/raindrop.png`}/>
                            <p className='detailValue'>{todayPOP} %</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-around text-center gap-1">
                    <div className='todaysForecastHumidity'>
                        <p className='detailTitle'>Humidity:</p>
                        <p className='detailValue'>{todayData.humidity} %</p>
                    </div>
                    <div className='todaysForecastPressure'>
                        <p className='detailTitle'>Pressure:</p>
                        <p>{todayPressure} in</p>
                    </div>
                </div>
                
                
            </div>
    );
};

export default TodaysForecast;