import { useEffect, useState } from "react";
import { cities } from '../../shared/utils/'
import { City } from "../../shared/types";
import Card from "./Card";

type Props = {
  cities: City[];
  selectCity: Function;
  selectedCity: City;
};  

function Cards({cities, selectCity, selectedCity}: Props) {

  return (
    <section className="cards">
      <div className="row">
        {cities.map((city, index) => (
          <Card city={city} 
          selectCity={selectCity}
          selectedCity={selectedCity}
          key={index}
           />
        ))}
      </div>
    </section>
  )
}

export default Cards;
