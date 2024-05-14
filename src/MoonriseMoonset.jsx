import './App.css'


const MoonriseMoonset = ({forecast}) => {
    console.log(forecast);
    if(!forecast.daily){
        return null;
    };

    const moonriseData = forecast.daily[0].moonrise + (forecast.timezone_offset);
    const moonsetData =  forecast.daily[0].moonset + (forecast.timezone_offset);
    console.log(moonriseData, moonsetData);

    const moonriseTime = new Date(moonriseData * 1000);
    const moonsetTime = new Date(moonsetData * 1000)
    console.log(moonriseTime, moonsetTime);

    const moonriseHours = moonriseTime.getUTCHours();
    const moonriseMinutes = moonriseTime.getUTCMinutes();
    console.log(moonriseHours, moonriseMinutes);

    return (
        <>  
            <div className="moonriseMoonsetContainer">
                <div id='top'>
                    <div id='moonriseText'>
                        Moonrise
                    </div>
                    <div id='moonsetText'>
                        Moonset
                    </div>
                </div>
                <div id='middle'>
                    <div id="moonrise">
                        {}:{} a.m.
                    </div>
                    <div id="moonset">
                        {}:{} p.m.
                    </div>
                </div>
                <div id='bottom'>
                    <div>
                        {/* <img alt='moonnrise icon' className='moonriseIcon' src={`icons/Moonrise_icon.png`}/> */}
                    </div>
                    <div>
                        {/* <img alt='moonset icon' className='moonsetIcon' src={`icons/Moonset_icon.png`}/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoonriseMoonset;