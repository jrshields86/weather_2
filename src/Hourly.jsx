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
            <div className="hourlyBox">
                {
                    formattedHourly.map(item => {
                        const hour = new Date(item.dt * 1000).getHours();
                        console.log(hour)
                        return (
                            <div className="hourlyChild" key={item.dt}>
                                <p>{}</p>
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