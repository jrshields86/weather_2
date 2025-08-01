import '../App.css'
import MoonriseMoonset from './MoonriseMoonset';

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
            <div className="sunriseSunsetContainer panel">
                <div className="sunriseSunsetChild">
                    <div className="moonriseMoonsetContainer">
                    <div className="sunriseSunsetTop">
                        <div className="sunriseSunsetTitle">Sunrise</div>
                    </div>
                    <div className="sunriseSunsetMiddle">
                        <div className="sunriseSunsetIcon">
                        <img
                            alt="sunrise icon"
                            className="sunriseIcon"
                            src={`icons/Sunrise_icon.png`}
                        />
                        </div>
                    </div>
                    <div className="sunriseSunsetBottom">
                        <div className="sunriseTime">
                        {sunriseHours}:{correctSunriseMin()} a.m.
                        </div>
                    </div>
                    </div>
                </div>
                            <div className="sunriseSunsetChild">
                    <div className="moonriseMoonsetContainer">
                    <div className="sunriseSunsetTop">
                        <div className="sunriseSunsetTitle">Sunset</div>
                    </div>
                    <div className="sunriseSunsetMiddle">
                        <div className="sunriseSunsetIcon">
                        <img
                            alt="sunset icon"
                            className="sunsetIcon"
                            src={`icons/Sunset_icon.png`}
                        />
                        </div>
                    </div>
                    <div className="sunriseSunsetBottom">
                        <div className="sunsetTime">
                        {correctSunsetHour()}:{correctSunsetMin()} p.m.
                        </div>
                    </div>
                    </div>
                </div>
                <div className='sunriseSunsetChild'>
                    <MoonriseMoonset  forecast={forecast} />
                </div>
            </div>
    );
};

export default SunriseSunset;