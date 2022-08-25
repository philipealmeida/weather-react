import { List, Temperatures } from "../../shared/types";

type Props = {
  list: List;
  minMax: Temperatures;
};

function DailyForecast({list, minMax}: Props) {
  if (!list || !minMax) return <div></div>;
  return (
    <>
      <div className="day">Today</div>
      <div className="temp">{minMax.min}°</div>
      <div className="min-temp">{minMax.max}°</div>
      <picture>
        <img src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} alt="daily-weather-icon" />
      </picture>
    </>
  )
}

export default DailyForecast;
