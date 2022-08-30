import React, { useState } from "react";
import { cities } from './shared/utils/'
import { City } from "./shared/types";
import './App.css'
import { Grid } from "./components/grid/Grid";
import { Aside } from "./components/aside/Aside";
import {Footer} from "./components/footer/Footer";
import HeroHeader from "./components/header/hero/HeroHeader";

function App() {
  const [filtered, setFiltered] = useState<City[]>(cities);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  const selectCity = (event: React.SyntheticEvent<Element, Event>, data: City) => {
    event.preventDefault();
    setSelectedCity(data);
  };

  return (
    <main className="App">
      <article>
        <section className="hero">
          <HeroHeader setFiltered={setFiltered}/>
          <Grid cities={filtered} selectCity={selectCity} selectedCity={selectedCity} />
        </section>
        <Aside selectedCity={selectedCity}/>
      </article>
      <Footer/>
    </main>
  )
}

export default App;
