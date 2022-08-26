import { List, DailyTemperatures } from "../../shared/types";

type Props = {
  daily: DailyTemperatures;
};

function DailyForecast({daily}: Props) {
  if (!daily) return <div></div>;
  return (
    <>
    <div className="day">{daily.day}</div>
      <div className="min-temp">{daily.min}°</div>
      <div className="max-temp">{daily.max}°</div>
      <picture>
        <img src={`http://openweathermap.org/img/wn/${daily.icon}@2x.png`} alt="daily-weather-icon" />
      </picture>
    </>
  )
}

export default DailyForecast;
