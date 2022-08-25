import { List, DailyTemperatures } from "../../shared/types";

type Props = {
  list: List;
  daily: DailyTemperatures;
};

function DailyForecast({list, daily}: Props) {
  if (!list || !daily) return <div></div>;
  return (
    <>
    <div className="day">{daily.day}</div>
      <div className="temp">{daily.min}°</div>
      <div className="min-temp">{daily.max}°</div>
      <picture>
        <img src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} alt="daily-weather-icon" />
      </picture>
    </>
  )
}

export default DailyForecast;
