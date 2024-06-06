import './App.css'

const TodaysForecast = ({forecast}) => {
    if (!forecast.daily) {
        return null;
    };
    
    console.log(forecast);
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
    const date = new Date(todayData.dt * 1000).toLocaleDateString();
    const day = new Date(todayData.dt * 1000).getDay();
    const todayDay = daysOfWeek.find((el, idx) => idx === day); 
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
    const todayIcon = todayData.weather[0].icon;
    console.log(todayIcon);
    
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
                        <div className='todayMorning'>
                            <div className='todayMorningTemp'>
                                Morning: {todayTemp.morning}°F
                            </div>
                            <div className='todayMorningFeelsLike'>
                                Feels like: {todayFeelsLike.morning}°F
                            </div>
                        </div>
                        <div className='todayAfternoon'>
                            <div className='todayAfternoonTemp'>
                                Afternoon: {todayTemp.day}°F
                            </div>
                            <div className='todayAfternoonFeelsLike'>
                                Feels Like: {todayFeelsLike.day}°F
                            </div>
                        </div>
                        <div className='todayEvening'>
                            <div className='todayEveningTemp'>
                                Evening: {todayTemp.evening}°F
                            </div>
                            <div>
                                Feels Like: {todayFeelsLike.evening}°F
                            </div>
                        </div>
                        <div className='todayOvernight'>
                            <div className='todayOvernightTemp'>
                                Overnight: {todayTemp.night}°F
                            </div>
                            <div>
                                Feels Like: {todayFeelsLike.night}°F
                            </div>
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