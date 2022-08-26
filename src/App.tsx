import React, { FormEvent, useEffect, useState } from "react";
import { cities, weatherAPI } from './shared/utils/'
import { City, OpenWeather } from "./shared/types";
import './App.css'
import {Cards} from "./components/cards/Cards";
import {AsideHeader} from "./components/headers/AsideHeader";
import {Forecast} from "./components/forecast/Forecast";

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
      } catch (error) {
        throw new Error('Error on fetch OpenWeather API');
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
            <AsideHeader/>
            <Forecast selectedCity={selectedCity} data={data}/>
          </aside>
        </article>
      </main>
    )
  }

  return <div></div>;
}

export default App;
