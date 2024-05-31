import './App.css'


const TodaysForecast = ({forecast}) => {
    if (!forecast.daily) {
        return null;
    };
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(forecast.daily[0].dt);
    const date = new Date(forecast.daily[0].dt * 1000).toLocaleDateString();
    console.log(date);
    return (
        <div>
            <div className="todaysForecastContainer">
                <div>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default TodaysForecast;