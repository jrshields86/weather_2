import './App.css'

const Forecast = ({forecast, windDirection}) => {
    if(!forecast.daily){
        return null;
    };

    console.log(forecast.daily);
    const formattedForecast = forecast.daily.slice(1, forecast.daily.length);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const forecastTempData = forecast.daily[0];
    console.log(forecastTempData);

    const todayTemp = {
        day: Math.round(forecastTempData.temp.day),
        evening: Math.round(forecastTempData.temp.eve),
        max: Math.round(forecastTempData.temp.max),
        min: Math.round(forecastTempData.temp.min),
        morning: Math.round(forecastTempData.temp.morn),
        night: Math.round(forecastTempData.temp.night)
    };
    const todayFeelsLike = {
        day: Math.round(forecastTempData.feels_like.day),
        evening: Math.round(forecastTempData.feels_like.eve),
        morning: Math.round(forecastTempData.feels_like.morn),
        night: Math.round(forecastTempData.feels_like.night)
    };
    
    
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Forecast;