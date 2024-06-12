import './App.css'

const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    console.log(forecast.daily);
    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const forecastTempData = forecast.daily[0];
    console.log(forecastTempData);

    const todayTemp = {
        day: Math.round(forecastTempData.temp.day),
        evening: Math.round(forecastTempData.temp.eve),
        max: Math.round(forecastTempData.temp.max),
        min: Math.round(forecastTempData.temp.min),
        morning: Math.round(forecastTempData.temp.morn),
        night: Math.round(forecastTempData.temp.night)
    };
    const todayFeelsLike = {
        day: Math.round(forecastTempData.feels_like.day),
        evening: Math.round(forecastTempData.feels_like.eve),
        morning: Math.round(forecastTempData.feels_like.morn),
        night: Math.round(forecastTempData.feels_like.night)
    };
    
    
    return (
        <div>
            <div className="forecastContainer">
                    {
                        formattedForecast.map(el =>{
                            const date = new Date(el.dt * 1000).toLocaleDateString();
                            const day = new Date(el.dt * 1000).getDay();

                            const dayOfWeekDisplay = (dayArr, dayIdx ) => {
                                const reorderArr = dayArr.slice(dayIdx).concat(dayArr.slice(0, dayIdx));
                                return reorderArr[0];  
                                };

                            const reorderedArr = dayOfWeekDisplay(daysOfWeek, day);
                            const iconData = el.weather;
                            const dailyIcon = iconData.map(el => {
                                return el.icon;
                            });
                            const dailyDescription = iconData.map(el =>{
                                return el.description;
                            })
            
                            return(
                                <div key={el.dt} className='forecastChild'>
                                    <div className='forecastLeftSide'>
                                        <div className='forecastDate'>
                                            <div>
                                                {date}
                                            </div>
                                            <div>
                                                {reorderedArr}
                                            </div>
                                        </div>
                                        <div className='forecastRight'>
                                            <div className='forecastIcon'>
                                                <img alt='weather icon' className='forecastIconImage' src={`icons/${dailyIcon}.png`}/>
                                            <div>
                                                {dailyDescription}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='forecastRightSide'>
                                    <div className='forecastTempContainer'>
                                        <div className='todaysForecastMorning'>
                                            <div className='todaysForecastMorningTemp'>
                                                Morning: {todayTemp.morning} °F
                                            </div>
                                            <div className='todaysForecastMorningFeelsLike'>
                                                Feels like: {todayFeelsLike.morning} °F
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='todaysForecastAfternoon'>
                                            <div className='todaysForecastAfternoonTemp'>
                                                Afternoon: {todayTemp.day} °F
                                            </div>
                                            <div className='todaysForecastAfternoonFeelsLike'>
                                                Feels Like: {todayFeelsLike.day} °F
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='todaysForecastEvening'>
                                            <div className='todaysForecastEveningTemp'>
                                                Evening: {todayTemp.evening} °F
                                            </div>
                                            <div className='todaysForecastEveningFeelsLike'>
                                                Feels Like: {todayFeelsLike.evening} °F
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='todaysForecastOvernight'>
                                            <div className='todaysForecastOvernightTemp'>
                                                Overnight: {todayTemp.night} °F
                                            </div>
                                            <div className='todaysForecastOvernightFeelsLike'>
                                                Feels Like: {todayFeelsLike.night} °F
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default Forecast;