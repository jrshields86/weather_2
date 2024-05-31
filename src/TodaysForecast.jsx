import './App.css'

const TodaysForecast = ({forecast}) => {
    if (!forecast.daily) {
        return null;
    };

    const todayData = forecast.daily[0];
    const todayTemp = {
        day: todayData.temp.day,
        evening: todayData.temp.eve,
        max: todayData.temp.max,
        min: todayData.temp.min,
        morning: todayData.temp.morn,
        night: todayData.temp.night
    };
    const todayFeelsLike = {
        day: todayData.feels_like.day,
        evening: todayData.feels_like.eve,
        morning: todayData.feels_like.morn,
        night: todayData.feels_like.night
    };
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(todayData.dt * 1000).toLocaleDateString();
    const day = new Date(todayData.dt * 1000).getDay();
    const todayDay = daysOfWeek.find((el, idx) => idx === day);
    const todayTempMin = Math.round(todayTemp.min);
    const todayTempMax = Math.round(todayTemp.max); 
    const todaySummary = todayData.summary;
    const todayClouds = todayData.clouds;
    const todayDewPoint = Math.round(todayData.dew_point);
    const todayHumidity = todayData.humidity;
    const todayProbOfPrecip = todayData.pop;
    const todayPressure = todayData.pressure;
    const todayRain = todayData.rain;
    const todayWindDeg = todayData.wind_deg;
    const todayWindGust = todayData.wind_gust;
    const todayWindSpeed = todayData.wind_speed;
    
    console.log(forecast.daily[0]);

    return (
        <div>
            <div className="todaysForecastContainer">
                <div className='todaysForecastTopContainer'>
                    <div className='todayForecastDateDayContainer'>
                        <div className='todaysForecastDate'>
                            {date}
                        </div>
                        <div className='todaysForecastDay'>
                            {todayDay}
                        </div>
                    </div>
                    <div className='todaysForecastMinMaxContainer'>
                        <div>
                            Max: {todayTempMax}
                        </div>
                        <div>
                            Min: {todayTempMin}
                        </div>
                    </div>
                </div>
                <div>
                    {todaySummary}
                </div>
            </div>
        </div>
    );
};

export default TodaysForecast;