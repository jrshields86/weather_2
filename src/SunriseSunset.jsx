import './App.css'

const SunriseSunset = ({forecast}) => {
    console.log(forecast);
    if(!forecast.current){
        return null;
    };

    const sunriseUTC = (forecast.current.sunrise);
    const sunsetUTC = (forecast.current.sunset);

    const sunriseTime = new Date(sunriseUTC * 1000);
    const sunriseTimeString = sunriseTime.toTimeString().slice(0, 5);
    const sunsetTime = new Date(sunsetUTC * 1000);
    const sunsetTimeString = sunsetTime.toTimeString().slice(0, 5) ;


    
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
                        {sunriseTimeString}
                    </div>
                    <div id="sunset">
                        {sunsetTimeString}
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