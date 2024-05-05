import './App.css'

const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    }

    const forecastData = forecast.daily;
    console.log(forecastData);
    const formattedForecast = forecastData.slice(1, forecastData.length);
    console.log(formattedForecast);

    // const tomorrowData = forecast.daily[1].weather[0].icon;
    // console.log(tomorrowData);
    

    return (
        <div>
            <div className="forecastContainer">
                {/* <div className='forecastLeft'>
                    <p>Date</p>
                    <img alt='weather icon' className='weatherIcon' src={`icons/${tomorrowData}.png`}/>
                </div>
                <div>
                    <p>Min:</p>
                    <p>Max:</p>
                </div> */}
                    {
                        formattedForecast.map(el =>{
                            return(
                                <div className='forecastRight'>
                                 Min: {el.temp.min}
                                 <br/>
                                 Max: {el.temp.max}
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default Forecast;