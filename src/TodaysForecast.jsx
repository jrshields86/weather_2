import './App.css'


const TodaysForecast = ({forecast}) => {
    if (!forecast.daily) {
        return null;
    };
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(forecast.daily[0].dt);
    const date = new Date(forecast.daily[0].dt * 1000).toLocaleDateString();
    const day = new Date(forecast.daily[0].dt * 1000).getDay();

    const todayDay = daysOfWeek.find((el, idx) => idx === day);
    console.log(todayDay);

    console.log(day);
    console.log(date);
    return (
        <div>
            <div className="todaysForecastContainer">
                <div className='todayForecastDateDayContainer'>
                    <div className='todaysForecastDate'>
                        {date}
                    </div>
                    <div className='todaysForecastDay'>
                        {todayDay}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysForecast;