import './App.css'

const SunriseSunset = ({forecast}) => {
    console.log(forecast);
    if(!forecast.current){
        return null;
    };

    const sunriseUTC = (forecast.current.sunrise);
    console.log(sunriseUTC);
    const sunsetUTC = (forecast.current.sunset);

    const timezoneOffset = forecast.timezone_offset;
    console.log(timezoneOffset);
    const offsetSunrise = sunriseUTC + timezoneOffset;
    console.log(offsetSunrise);

    
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
                        {}
                    </div>
                    <div id="sunset">
                        {}
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