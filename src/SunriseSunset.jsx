import './App.css'

const SunriseSunset = ({forecast}) => {
    console.log(forecast)
    // const sunriseData = forecast.sys.sunrise;
    // const sunsetData = forecast.sys.sunset;

    // const sunriseTime = () => {
    //     const sunriseTime = new Date(sunriseData * 1000);
    //     const sunriseHours = sunriseTime.getHours();
    //     const sunriseMinutes = sunriseTime.getMinutes();
    //     const formattedSunrise = `${sunriseHours}:${sunriseMinutes} a.m.`;
    //     return formattedSunrise;
    // };

    // const sunsetTime = () => {
    //     const sunsetTime = new Date(sunsetData * 1000);
    //     const sunsetHours = sunsetTime.getHours();
    //     const sunsetMinutes = sunsetTime.getMinutes();
    //     const formattedSunset = `${sunsetHours - 12}:${sunsetMinutes} p.m.`;
    //     return formattedSunset;
    // };
    
    
    // return (
    //     <>  
    //         <div className="sunriseSunsetContainer">
    //             <div id='top'>
    //                 <div id='sunriseText'>
    //                     Sunrise
    //                 </div>
    //                 <div id='sunsetText'>
    //                     Sunset
    //                 </div>
    //             </div>
    //             <div id='middle'>
    //                 <div id="sunrise">
    //                     {sunriseTime()}
    //                 </div>
    //                 <div id="sunset">
    //                     {sunsetTime()}
    //                 </div>
    //             </div>
    //             <div id='bottom'>
    //                 <div>
    //                     <img src='/final_white_sunrise_icon.png' alt='sunrise icon' width='100px' height='100px' />
    //                 </div>
    //                 <div>
    //                     <img src='/final_white_sunset_icon.png' alt='sunset icon' width='100px' height='100px' />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
};

export default SunriseSunset;