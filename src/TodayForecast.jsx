import './App.css'


const TodayForecast = ({forecast}) => {
    if (!forecast.daily) {
        return null;
    };
    console.log(forecast.daily[0]);
    return (
        <div>
            <div className="todaysForecastContainer">

            </div>
        </div>
    );
};

export default TodayForecast;