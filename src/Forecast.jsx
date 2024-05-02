import './App.css'

const Forecast = ({forecast, windDirection}) => {
    const tomorrowData = forecast.daily;
    console.log(tomorrowData);
    

    return (
        <div>
            <div className="forecastContainer">
                
            </div>
        </div>
    );
};

export default Forecast;