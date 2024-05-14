import './App.css'

const SunriseSunset = ({forecast}) => {
    if(!forecast.current){
        return null;
    };

    const sunriseUTC = forecast.current.sunrise + (forecast.timezone_offset);
    const sunsetUTC = forecast.current.sunset + (forecast.timezone_offset);

    const sunriseTime = new Date(sunriseUTC * 1000);
    const sunsetTime = new Date(sunsetUTC * 1000)

    const sunriseHours = sunriseTime.getUTCHours();
    const sunriseMinutes = sunriseTime.getUTCMinutes();

    const sunsetHours = sunsetTime.getUTCHours();
    const sunsetMinutes = sunsetTime.getUTCMinutes();

    const zero = 0;

    const correctSunsetHour = () => {
        if(sunsetHours > 12){
            return sunsetHours - 12;
        } else {
            return sunsetHours;
        };
    };

    const correctSunsetMin = () => {
        if(sunsetMinutes < 10){
            return `${zero}${sunsetMinutes}`;
        } else {
            return sunsetMinutes;
        };
    };

    const correctSunriseMin = () => {
        if(sunriseMinutes < 10) {
            return `${zero}${sunriseMinutes}`
        } else {
            return sunriseMinutes
        }
    };
    
    return (
        <>  
            <div className="sunriseSunsetContainer">
                <div id='top'>
                    <div id='sunriseText'>
                        Sunrise
                    </div>
                    <div id='sunsetText'>
                        Sunset
                    </div>
                </div>
                <div id='middle'>
                    <div id="sunrise">
                        {sunriseHours}:{correctSunriseMin()} a.m.
                    </div>
                    <div id="sunset">
                        {correctSunsetHour()}:{correctSunsetMin()} p.m.
                    </div>
                </div>
                <div id='bottom'>
                    <div>
                        <img alt='sunrise icon' className='sunriseIcon' src={`icons/Sunrise_icon.png`}/>
                    </div>
                    <div>
                        <img alt='sunset icon' className='sunsetIcon' src={`icons/Sunset_icon.png`}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SunriseSunset;