

const CurrentWeather = ({currentWeather}) => {
  return (
    <>
      <div className="current-weather">
        <h2>{currentWeather.location}</h2>
        <img src={`icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" />
        <h2 className="temperature">
          {currentWeather.temperature} <span>°c</span>
        </h2>
        <p className="description">{currentWeather.description}</p>
      </div>
    </>
  );
};

export default CurrentWeather;
