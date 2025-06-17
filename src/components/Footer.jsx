import React from "react";

const Footer = () => {
  return (
    <>
      <div className="main-heading">
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          About Me
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Welcome, Hey I'm Gaurav
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="container">
              <div className="text-center"></div>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="card shadow-sm border-0">
                    <div className="card-body">
                      <h3 className="mb-4 text-primary">
                        🛠️ Tech Stack & Key Features
                      </h3>
                      <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                          ✅ <strong>React.js + Vite</strong> — fast build &
                          optimized performance
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>Geolocation button</strong> — instantly
                          shows your current location's weather
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>24-hour weather forecast</strong> — updated
                          dynamically
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>React Toastify</strong> — alerts for API
                          errors and location permission
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>Weather API</strong> — for real-time
                          weather data
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>Google Fonts</strong> — clean and modern UI
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>React Hooks</strong> — useState, useEffect,
                          useRef for logic handling
                        </li>
                        <li className="list-group-item">
                          ✅ <strong>Vercel Deployment</strong> — fast and
                          smooth user experience
                        </li>
                      </ul>

                      <p className="mb-4">
                        💡 Designed with a focus on clean UI, usability, and
                        modern best practices.
                      </p>

                      <div className="d-flex gap-3">
                        <a
                          href="https://react-weather-app-seven-ashy.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success"
                        >
                          🔗 Live Demo
                        </a>
                        <a
                          href="https://github.com/Gauravvgithub/react-weather-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark"
                        >
                          📂 GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown mb-5 main-heading">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Show More
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/gaurav-raj7011/"
                  target="_blank"
                >
                  My Linkedin Page
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://github.com/Gauravvgithub"
                  target="_blank"
                >
                  My GitHub Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://my-portfolio-gaurav-seven.vercel.app/"
                  target="_blank"
                >
                  My PortFolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
