import './App.css'
import { Accordion, AccordionItem, AccordionHeader } from "react-bootstrap";


const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    

    console.log(formattedForecast);
    
    
    return (
        <div className='forecastContainer'>
            <Accordion className='accordion'>
                {
                    formattedForecast.map((item, idx) => (
                        <Accordion.Item key={idx} eventKey={idx}>
                            <Accordion.Header className='accordionHeader'>
                                    <p className='accordionHeaderChild'>day</p>
                                    <p className='accordionHeaderChild'>date</p>
                                    <p className='accordionHeaderChild'>{Math.round(item.temp.day)}/{Math.round(item.temp.night)} °F</p>
                                    <img alt='weather icon' className='weatherIcon' src={`icons/${item.weather[0].icon}.png`}/>
                                    <p className='accordionHeaderChild'>{item.weather[0].description}</p>
                                    <p className='accordionHeaderChild'>{item.pop * 100} %</p>
                                    <p className='accordionHeaderChild'>{windDirection(item.wind_deg)} {Math.round(item.wind_speed)} mph</p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <p>Clouds: {item.clouds} %</p>
                                </div>
                                <div>
                                    <p>Humidity: {item.humidity} %</p>
                                </div>
                                <div>
                                    <p>Dew Point: {item.dew_point} °F</p>
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