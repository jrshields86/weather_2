import './App.css'


const MoonriseMoonset = () => {
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