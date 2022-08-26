import { City } from "../../shared/types";

type Props = {
  city: City;
  selectCity: Function;
  selectedCity: City;
};

function Card({city, selectCity, selectedCity}: Props) {
  if (!city)
    return <div></div>;

  return (
    <div 
    className={`card ${selectedCity.name == city.name ? 'active' : ''}`}
    onClick={event => {selectCity(event, city)}}>
      <div className="wrapper-image-card">
        <img src={`/images/${city.name.toLowerCase()}.webp`} alt={city.name} />
      </div>
      <p className="card-title">{city.name}, {city.country}</p>
    </div>
  )
}

export default Card;
