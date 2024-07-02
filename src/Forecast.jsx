import './App.css'
import { Accordion, AccordionItem, AccordionHeader } from "react-bootstrap";


const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayData = formattedForecast.map((item, idx) => {
       const day = new Date(item.dt * 1000).toDateString();
       return day; 
    });
    const dateDay = new Date(formattedForecast[0].dt * 1000).toDateString().substring(0, 3);
    const dateNumber = new Date(formattedForecast[0].dt * 1000).toDateString().substring(7, 10);
    console.log(dateDay, dateNumber);

    
    
    return (
        <div className='forecastContainer'>
            <Accordion className='accordion'>
                {
                    formattedForecast.map((item, idx) => (
                        <Accordion.Item key={idx} eventKey={idx}>
                            <Accordion.Header className='accordionHeader'>
                                    <p className='accordionHeaderChild'>
                                        {new Date(item.dt * 1000).toDateString().substring(0, 3)}
                                        {new Date(item.dt * 1000).toDateString().substring(7, 10)}
                                    </p>
                                    <p className='accordionHeaderChild'>{Math.round(item.temp.day)}/{Math.round(item.temp.night)} °F</p>
                                    <img alt='weather icon' className='weatherIcon' src={`icons/${item.weather[0].icon}.png`}/>
                                    {/* <p className='accordionHeaderChild'>{item.weather[0].description}</p> */}
                                    <p className='accordionHeaderChild'>
                                        <img alt='weather icon' className='raindropIcon' src={`icons/raindrop.png`}/>
                                        {Math.round(item.pop * 100)} %
                                    </p>
                                    <p className='accordionHeaderChild'>{windDirection(item.wind_deg)} {Math.round(item.wind_speed)} mph</p>
                            </Accordion.Header>
                            <Accordion.Body className='accordionBody'>
                                <div>
                                    <p>{item.summary}</p>
                                </div>
                                <div>
                                    <p>{windDirection(item.wind_deg)} {Math.round(item.wind_speed)} mph</p>
                                </div>
                                <div>
                                    <p>Humidity: {item.humidity} %</p>
                                </div>
                                <div>
                                    <p>Dew Point: {Math.round(item.dew_point)} °F</p>
                                </div>
                                <div>
                                    <p>UV Index: {Math.round(item.uvi)} of 11</p>
                                </div>
                                <div>
                                    <p>Pressure: {(item.pressure * 0.025).toFixed(2)} in</p>
                                </div>       
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </div>
    );
};

export default Forecast;