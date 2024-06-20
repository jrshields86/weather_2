import './App.css'
import { Accordion } from "react-bootstrap";


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
                            <Accordion.Header>
                                <div>
                                    {item.dt}
                                </div>
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