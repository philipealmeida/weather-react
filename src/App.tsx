import React, { FormEvent, useEffect, useState } from "react";
import { cities, weatherAPI } from './shared/utils/'
import { City, OpenWeather } from "./shared/types";
import moment from 'moment';
import './App.css'
import Cards from "./components/Cards";
import DailyForecast from "./components/Forecast/DailyForecast";
import Forecast from "./components/Forecast";

function App() {
  const [filter, setFilter] = useState<string>('');
  const [filtered, setFiltered] = useState<City[]>(cities);
  const [data, setData] = useState<OpenWeather | null>(null);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  const onFilterChange = (event: FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };
  const resetFilter = () => {
    setFilter('');
  };

  const selectCity = (event: React.SyntheticEvent<Element, Event>, data: City) => {
    setSelectedCity(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${weatherAPI.OPEN_WEATHER_URL}/forecast?lat=${selectedCity.lat}&lon=${selectedCity.long}&units=metric&lang=en&APPID=${weatherAPI.OPEN_WEATHER_API_KEY}`);
        const data = await response.json();
        setData(data);
        console.table(data);
      } catch (error) {
        throw new Error('Error on fetch OpenWeather API', { cause: error });
      }
    };

    fetchData();

  }, [selectedCity])

  useEffect(() => {
    const filtered = () => {
      const cities_filtered = cities.filter(c => c.name.toLowerCase().includes(filter.toLocaleLowerCase()) || filter === '');
      setFiltered(cities_filtered.length ? cities_filtered : cities);
    };
    filtered();
  }, [filter]);

  if (data) {
    return (
      <main className="App">
        <article>
          <section className="hero">
            <header>
              <section className="filters">
                <div className="wrapper-filter">
                  <input type="text" placeholder="Search City" value={filter} onChange={onFilterChange} />
                  <button type="button" onClick={resetFilter}>All places</button>
                </div>
              </section>
              <h1 className="hero-title">World<span className="bold"> Weather</span></h1>
            </header>
            <Cards cities={filtered} selectCity={selectCity} selectedCity={selectedCity} />
          </section>

          <aside>
            <header>
              <ul>
                <li>
                  <a>Notifications <span className="alerts">3</span></a>
                </li>
                <li>
                  <a>Places</a>
                </li>
              </ul>
              <div className="user-avatar">
                <img src="" alt="" />
              </div>
            </header>

            {/* <section className="daily-conditions">
              <div className="date-conditions">
                {data.list &&
                  <picture>
                    <img src={`http://openweathermap.org/img/wn/${preparedData(data)[0].weather[0].icon}@2x.png`} alt="current-weather-icon" />
                  </picture>
                }
                <div className="date-info">
                  <span className="day">Today</span>
                  <span className="week-day">
                    {moment(new Date()).format("ddd")}, {moment(new Date()).format("D")} {moment(new Date()).format("MMM")}
                  </span>
                </div>

              </div>
              <span className="temperature-value">{Math.round(preparedData(data)[0].main.feels_like)}<span className="celsius">°C</span></span>
              <span className="city-name">{selectedCity.name}, {selectedCity.country}</span>
            </section>

            <section className="weekly-forecast">
              <span className="title">Daily Forecast</span>
              <div className="row">
                {data.list && preparedData(data).map((list, index) => (
                  <div className="col" key={list.dt}>
                    <DailyForecast list={list} />
                  </div>
                ))}
              </div>

            </section> */}
            <Forecast selectedCity={selectedCity} data={data}/>

          </aside>
        </article>
      </main>
    )
  }
}

export default App;
