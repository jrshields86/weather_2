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
                                    <p className='accordionHeaderChild'>Day/Night Temp</p>
                                    <p className='accordionHeaderChild'>Icon</p>
                                    <p className='accordionHeaderChild'>Short Description</p>
                                    <p className='accordionHeaderChild'>POP</p>
                                    <p className='accordionHeaderChild'>Wind</p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <p>Clouds: {item.clouds}%</p>
                                </div>
                                <div>
                                    <p>Humidity: {item.humidity}</p>
                                </div>
                                <div>
                                    <p>Dew Point: {item.dew_point}</p>
                                </div>
                                <div>
                                    <p>POP: {item.pop}</p>
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