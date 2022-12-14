import { City } from "../../shared/types";
import {Card} from "./Card";
import "./Grid.css";

type Props = {
  cities: City[];
  selectCity: Function;
  selectedCity: City;
};  

export function Grid({cities, selectCity, selectedCity}: Props) {

  return (
    <section className="cards">
      <div className="row">
        {cities.map((city) => (
          <Card city={city} 
          selectCity={selectCity}
          selectedCity={selectedCity}
          key={city.name}
           />
        ))}
      </div>
    </section>
  )
}
