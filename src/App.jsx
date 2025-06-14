import { useEffect, useRef, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";
import { weatherCodes } from "./constants";
import NoResultsDiv from "./components/NoResultsDiv";
import { toast } from 'react-toastify';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;


  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForcasts, setHourlyForcasts] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);

  const searchInputRef = useRef(null);

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    // Filter the hourly data to only includes the next 24 hours
    const next24HoursData = hourlyData.filter(({ time }) => {
      const forcastTime = new Date(time).getTime();
      return forcastTime >= currentHour && forcastTime <= next24Hours;
    });

    setHourlyForcasts(next24HoursData);
  };

  // fetchs weather dedtails based on th API URL
  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);
        window.innerWidth <= 768 && searchInputRef.current.focus();

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error();

      const data = await response.json();
      // console.log(data)

      // Extract current weather data
      const location = data.location.name;
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({ location, temperature, description, weatherIcon });

      //Combined hourly data from both forcast days
      const combinedHourlyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      searchInputRef.current.value = data.location.name;
      filterHourlyForecast(combinedHourlyData);
    } catch(error) {
      // Set setHasNoresults state if there's an error
      setHasNoResults(true);
      toast.info("Enter correct city name");
    }
  };

  // fetch default city (Delhi India) weather data on initial render
  useEffect(()=>{
    const defaultCity = "Delhi India"

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDetails(API_URL);
  },[])

  return (
    <>
    <Navbar />
      <div className="container">
        {/* search section */}
        <SearchSection
          getWeatherDetails={getWeatherDetails}
          searchInputRef={searchInputRef}
        />

        {/* Conditionally render based on hasNoResults state */}
        {hasNoResults ? (
          <NoResultsDiv />
        ) : (
          <div className="weather-section">
            <CurrentWeather currentWeather={currentWeather} />

            {/* Hourly weather forecast list */}
            <div className="hourly-forecast">
              <ul className="weather-list">
                {hourlyForcasts.map((hourlyWeather) => (
                  <HourlyWeatherItem
                    key={hourlyWeather.time_epoch}
                    hourlyWeather={hourlyWeather}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
