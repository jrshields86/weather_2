import './App.css'

const Forecast = ({forecast, windDirection}) => {
    console.log(forecast);

    if(!forecast.daily){
        return null;
    };

    const forecastData = forecast.daily;
    const formattedForecast = forecastData.slice(1, forecastData.length);
    console.log(formattedForecast);

    return (
        <div>
            <div className="forecastContainer">
                    {
                        formattedForecast.map(el =>{
                            const date = new Date(el.dt * 1000).toLocaleDateString()
                            const iconData = el.weather;
                            const dailyIcon = iconData.map(el => {
                                return el.icon;
                            });
                            console.log(dailyIcon);
            
                            return(
                                <div key={el.dt} className='forecastChild'>
                                    <div className='forecastDate'>
                                        {date}
                                    </div>
                                    <div className='forecastRight'>
                                        <div className='forecastIcon'>
                                        <img alt='weather icon' className='forecastIconImage' src={`icons/${dailyIcon}.png`}/>
                                        </div>
                                        <div className='minMax'>
                                            Min: {Math.round(el.temp.min)} F°
                                            <br/>
                                            Max: {Math.round(el.temp.max)} F°
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