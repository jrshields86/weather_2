import './App.css'
import { Accordion } from "react-bootstrap";


const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // const forecastTempData = forecast.daily[0];

    console.log(formattedForecast);

    // const todayTemp = {
    //     day: Math.round(forecastTempData.temp.day),
    //     evening: Math.round(forecastTempData.temp.eve),
    //     max: Math.round(forecastTempData.temp.max),
    //     min: Math.round(forecastTempData.temp.min),
    //     morning: Math.round(forecastTempData.temp.morn),
    //     night: Math.round(forecastTempData.temp.night)
    // };
    // const todayFeelsLike = {
    //     day: Math.round(forecastTempData.feels_like.day),
    //     evening: Math.round(forecastTempData.feels_like.eve),
    //     morning: Math.round(forecastTempData.feels_like.morn),
    //     night: Math.round(forecastTempData.feels_like.night)
    // };
    
    
    return (
        <div>
            <Accordion>
                {
                    formattedForecast.map((item, idx) => (
                        <Accordion.Item eventKey={idx}>
                            <Accordion.Header>{item.dt}</Accordion.Header>
                            <Accordion.Body>
                            <p>Clouds: {item.clouds}%</p>
                            <p>Humidity: {item.humidity}</p>
                            <p>Dew Point: {item.dew_point}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    );
};

export default Forecast;