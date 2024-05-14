import './App.css'

const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    const forecastData = forecast.daily;
    const formattedForecast = forecastData.slice(1, forecastData.length);

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