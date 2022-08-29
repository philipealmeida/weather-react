import React, { FormEvent, useEffect, useState } from "react";
import { cities } from './shared/utils/'
import { City } from "./shared/types";
import './App.css'
import { Grid } from "./components/grid/Grid";
import { Aside } from "./components/aside/Aside";

function App() {
  const [filter, setFilter] = useState<string>('');
  const [filtered, setFiltered] = useState<City[]>(cities);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  const onFilterChange = (event: FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const resetFilter = () => {
    setFilter('');
  };

  const selectCity = (event: React.SyntheticEvent<Element, Event>, data: City) => {
    setSelectedCity(data);
  };

  useEffect(() => {
    const filtered = () => {
      const cities_filtered = cities.filter(c => c.name.toLowerCase().includes(filter.toLocaleLowerCase()) || filter === '');
      setFiltered(cities_filtered.length ? cities_filtered : cities);
    };
    filtered();
  }, [filter]);

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
          <Grid cities={filtered} selectCity={selectCity} selectedCity={selectedCity} />
        </section>

        <Aside selectedCity={selectedCity}/>
      </article>
    </main>
  )
}

export default App;
