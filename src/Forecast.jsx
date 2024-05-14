import './App.css'

const Forecast = ({forecast, windDirection}) => {
    console.log(forecast.daily);
    if(!forecast.daily){
        return null;
    };

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    

    const forecastData = forecast.daily;
    const formattedForecast = forecastData.slice(1, forecastData.length);

    return (
        <div>
            <div className="forecastContainer">
                    {
                        formattedForecast.map(el =>{
                            const date = new Date(el.dt * 1000).toLocaleDateString();
                            const day = new Date(el.dt * 1000).getUTCDay();
                            console.log(day);
                            const iconData = el.weather;
                            const dailyIcon = iconData.map(el => {
                                return el.icon;
                            });
                            const dailyDescription = iconData.map(el =>{
                                return el.main;
                            })
            
                            return(
                                <div key={el.dt} className='forecastChild'>
                                    <div className='forecastDate'>
                                        {date}
                                    </div>
                                    <div className='forecastRight'>
                                        <div className='forecastIcon'>
                                        <img alt='weather icon' className='forecastIconImage' src={`icons/${dailyIcon}.png`}/>
                                        <div>
                                            {dailyDescription}
                                        </div>
                                        </div>
                                        <div className='minMax'>
                                            <p>Max: {Math.round(el.temp.max)} F°</p>
                                            <p>Min: {Math.round(el.temp.min)} F°</p>
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