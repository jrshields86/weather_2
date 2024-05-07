import './App.css'

const Forecast = ({forecast, windDirection}) => {
    console.log(forecast);

    if(!forecast.daily){
        return null;
    };

    const forecastData = forecast.daily;
    const formattedForecast = forecastData.slice(1, forecastData.length);
    console.log(formattedForecast);
    const currDateUTC = forecast.current.dt;
    const localDate = new Date(currDateUTC * 1000).toLocaleDateString();


    return (
        <div>
            <div className="forecastContainer">
                    {
                        formattedForecast.map(el =>{
                            const date = new Date(el.dt * 1000).toLocaleDateString()
                            console.log(date);
                            return(
                                <div key={el.dt}>
                                    <div className='dateBox'>
                                        {date}
                                    </div>
                                    <div className='forecastRight'>
                                        Min: {el.temp.min}
                                        <br/>
                                        Max: {el.temp.max}
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