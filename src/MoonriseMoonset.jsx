import './App.css'


const MoonriseMoonset = ({forecast}) => {
    if(!forecast.daily){
        return null;
    };

    const moonPhaseData = forecast.daily[0].moon_phase;

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
            return 'moon_new_moon';
        } else if (phaseNum > 0 && phaseNum < 0.25) {
            return 'moon_waning_crescent'
        } else if (phaseNum === 0.25) {
            return 'moon_last_quarter';
        } else if (phaseNum > 0.25 && phaseNum < 0.5) {
            return 'moon_waning_gibbous';
        } else if (phaseNum === 0.5) {
            return 'moon_full';
        } else if (phaseNum > 0.5 && phaseNum < 0.75) {
            return 'moon_waxing_gibbous';
        } else if (phaseNum === 0.75) {
            return 'moon_first_quarter';
        } else if (phaseNum > 0.75  && phaseNum < 1.0) {
            return 'moon_waxing_crescent';
        }
    };

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
                    <div id='moonPhaseIcon'>
                        <img id='moonIcon' src={`icons/${displayMoonPhaseIcon(moonPhaseData)}.png`} alt='moon phase icon' />
                    </div>
                </div>
                <div id='bottom'>
                    <div id="moonrise">
                        {displayMoonPhase(moonPhaseData)}
                    </div>
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