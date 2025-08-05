import React from 'react';
import '../App.css'

export default function Hourly({ forecast }) {
    const hourly = (forecast.hourly);
  if (!Array.isArray(hourly) || hourly.length === 0) {
    return null;
  }

  // 1. Figure out “now” in milliseconds
  const nowMs = Date.now();

  // 2. Filter out any hours in the past
  const upcoming = hourly.filter(h => h.dt * 1000 >= nowMs);

  // 3. Take exactly the next 12 entries
  const display = upcoming.slice(0, 12);

  return (
    <div className="panel flex overflow-x-auto gap-1">
      {display.map(h => {
        const date = new Date(h.dt * 1000);
        const timeLabel = date.toLocaleTimeString([], {
          hour:   '2-digit',
          minute: '2-digit'
        });

        return (
          <div className="hourlyItem" key={h.dt}>
            <div className="hourlyTime">{timeLabel}</div>
            <img
              src={`https://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`}
              alt={h.weather[0].description}
            />
            <div className="hourlyTemp">{Math.round(h.temp)}°</div>
          </div>
        );
      })}
    </div>
  );
}
