import './App.css'


const Alerts = ({forecast}) => {
    if (!forecast.alerts) {
        return null;
    };
    const alertTitle = forecast.alerts[0].event;
    const alertStartTime = new Date(forecast.alerts[0].start * 1000);
    const alertEndTime = new Date(forecast.alerts[0].end * 1000);
    const alertDescription = forecast.alerts[0].description;
    console.log(alertDescription);
    


    return (
        <div>
            <div className='alertContainer'>
                {alertTitle}
            </div>
        </div>
    );
};

export default Alerts;