import './App.css'

const SunriseSunset = ({forecast}) => {
    console.log(forecast);
    if(!forecast.current){
        return null;
    };

    const sunriseUTC = forecast.current.sunrise + (forecast.timezone_offset);
    const sunsetUTC = forecast.current.sunset + (forecast.timezone_offset);
    const timezoneOffset = forecast.timezone_offset;
    console.log(timezoneOffset);
    console.log(sunriseUTC);

    const sunriseTime = new Date(sunriseUTC * 1000);
    const sunsetTime = new Date(sunsetUTC * 1000)
    const sunriseHours = sunriseTime.getUTCHours();
    const sunriseMinutes = sunriseTime.getUTCMinutes();
    const sunsetHours = sunsetTime.getUTCHours();
    const sunsetMinutes = sunsetTime.getUTCMinutes();
    const zero = 0;
    console.log(sunsetMinutes);


    
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
                        {sunriseHours}:{sunriseMinutes}
                    </div>
                    <div id="sunset">
                        {sunsetHours}:{sunsetMinutes}
                    </div>
                </div>
                <div id='bottom'>
                    <div>
                        {/* <img src={`icons/${dailyIcon}.png`} alt='sunrise icon' width='100px' height='100px' /> */}
                    </div>
                    <div>
                        {/* <img src={`icons/${dailyIcon}.png`} alt='sunset icon' width='100px' height='100px' /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SunriseSunset;