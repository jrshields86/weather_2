import './App.css'
import { Accordion } from "react-bootstrap";



const ForecastTest = ({forecast, windDirection}) => {
    console.log(forecast)
    if(!forecast.daily){
        return null;
    };
    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);


    const renderAccordion = (day) => {
        console.log(day);
        <Accordion key={day.dt}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
    };
    const forecastAccordion = formattedForecast.map(renderAccordion);

    return (
        <div>{formattedForecast.map(renderAccordion)}</div>
    );
};

export default ForecastTest;