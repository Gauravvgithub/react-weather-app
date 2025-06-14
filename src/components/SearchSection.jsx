const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  // handles city search form submission
  const handleCitySearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    // console.log(searchInput.value);
    getWeatherDetails(API_URL); //fetchs weather details for the entered city
  };

  // Gets users current location (latitude, longitude)
  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        // console.log(searchInput.value);
        getWeatherDetails(API_URL); //fetchs weather details by the users current location
        console.log(position);

        window.innerWidth >= 768 && searchInputRef.current.focus();
      },
      () => {
        alert(
          "Location access denied. Please enable permission too use this feature."
        );
      }
    );
  };

  return (
    <>
      <div className="search-section">
        <form action="#" className="search-form" onSubmit={handleCitySearch}>
          <span className="material-symbols-rounded">search</span>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          />
        </form>
        <button className="location-button" onClick={handleLocationSearch}>
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>
    </>
  );
};

export default SearchSection;
