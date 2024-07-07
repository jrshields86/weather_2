import React from "react";
import './App.css'


const Hourly = ({forecast}) => {
    if (!forecast.hourly) {
        return null;
    }
    const formattedHourly = (forecast.hourly).slice(0, 24);
    console.log(formattedHourly);

    return (
        <div className="hourlyContainer">
            <div className="hourlyHeader">
                Hourly
            </div>
            <div className="hourlyBox">
                {
                    formattedHourly.map((item, idx) => {
                        const hour = new Date(item.dt * 1000).getHours();
                        const index = idx;
                        const hourDisplay = (hour, index) => {
                            if (hour > 12) {
                                return hour - 12;
                            } else if (hour === 0) {
                                return 12;
                            } else {
                                return hour;
                            }
                        };
                        
                        return (
                            <div className="hourlyChild" key={item.dt}>
                                <p>{hourDisplay(hour, index)}</p>
                                <img alt='weather icon' className='weatherIcon' src={`icons/${item.weather[0].icon}.png`}/>
                                <p>{Math.round(item.temp)}°</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default Hourly;