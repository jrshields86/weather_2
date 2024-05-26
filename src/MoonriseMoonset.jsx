import './App.css'


const MoonriseMoonset = ({forecast}) => {
    
    if(!forecast.daily){
        return null;
    };

    const moonPhaseData = forecast.daily[0].moon_phase;
    console.log(moonPhaseData);

    const displayMoonPhase = (phaseNum) => {
        if (phaseNum === 0 || phaseNum === 1) {
            return 'New Moon';
        } else if (phaseNum > 0 && phaseNum < 0.25) {
            return 'Waxing Crescent Moon'
        } else if (phaseNum === 0.25) {
            return 'First Quarter Moon';
        } else if (phaseNum > 0.25 && phaseNum < 0.5) {
            return 'Waxing Gibbous Moon';
        } else if (phaseNum === 0.5) {
            return 'Full Moon';
        } else if (phaseNum > 0.5 && phaseNum < 0.75) {
            return 'Waning Gibbous Moon';
        } else if (phaseNum === 0.75) {
            return 'Last Quarter Moon';
        } else if (phaseNum > 0.75  && phaseNum < 1.0) {
            return 'Waning Crescent Moon';
        }
    };

    const displayMoonPhaseIcon = (phaseNum) => {
        if (phaseNum === 0 || phaseNum === 1) {
            return 'new_moon';
        } else if (phaseNum > 0 && phaseNum < 0.25) {
            return 'waxing_crescent_moon'
        } else if (phaseNum === 0.25) {
            return 'first_quarter_moon';
        } else if (phaseNum > 0.25 && phaseNum < 0.5) {
            return 'waxing_gibbous_moon';
        } else if (phaseNum === 0.5) {
            return 'full_moon';
        } else if (phaseNum > 0.5 && phaseNum < 0.75) {
            return 'waning_gibbous_moon';
        } else if (phaseNum === 0.75) {
            return 'last_quarter_moon';
        } else if (phaseNum > 0.75  && phaseNum < 1.0) {
            return 'waning_crescent_moon';
        }
    };
    console.log(displayMoonPhaseIcon(moonPhaseData));

    // const moonriseData = forecast.daily[0].moonrise + (forecast.timezone_offset);
    // const moonsetData =  forecast.daily[0].moonset + (forecast.timezone_offset);
    // console.log(moonriseData, moonsetData);

    // const moonriseTime = new Date(moonriseData * 1000);
    // const moonsetTime = new Date(moonsetData * 1000);
    // console.log(moonriseTime, moonsetTime);

    // const moonriseHours = moonriseTime.getUTCHours();
    // const moonriseMinutes = moonriseTime.getUTCMinutes();
    // console.log(moonriseHours, moonriseMinutes);

    return (
        <>  
            <div className="moonriseMoonsetContainer">
                <div id='top'>
                    <div id='moonriseText'>
                        Moon Phase
                    </div>
                </div>
                <div id='moonPhaseMiddle'>
                    <div id='moonrise'>
                        <img src={`icons/${displayMoonPhaseIcon(moonPhaseData)}.png`} alt='moon phase icon' />
                    </div>
                    <div id="moonrise">
                        {displayMoonPhase(moonPhaseData)}
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