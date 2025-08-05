import '../App.css';

const CurrentWeather = ({current, windDirection}) => {
    const iconData = current.weather;

    if (!iconData){
        return null;
    };

    const icon = iconData[0].icon;
    const description = iconData[0].description;

   return (
  <div className="panel weatherCard flex flex-col gap-4 animate-fadeIn">
    <h2 className="currentWeatherHeader">Current Weather</h2>

    <div className="flex justify-center items-center gap-6">
      <img
        alt={description}
        className="currentWeatherIcon weatherIconCircle"
        src={`icons/${icon}.png`}
      />
      <div className="flex flex-col items-start gap-1">
        <p className="tempGradient">{Math.round(current.temp)}°F</p>
        <p className="descriptionItalic">{description}</p>
      </div>
    </div>

    <div className="flex justify-around items-center gap-8">
      <div className="detailItem">
        {/* <img src="/icons/wind.png" alt="wind" className="detailIcon"/> */}
        <span className="detailTitle">Wind</span>
        <span className="detailValue">
          {windDirection(current.wind_deg)} {Math.round(current.wind_speed)} mph
        </span>
      </div>
      <div className="detailItem">
        {/* <img src="/icons/clouds.png" alt="clouds" className="detailIcon"/> */}
        <span className="detailTitle">Clouds</span>
        <span className="detailValue">{current.clouds}%</span>
      </div>
    </div>
  </div>
);

};

export default CurrentWeather;