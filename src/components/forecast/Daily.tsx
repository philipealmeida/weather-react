import { useContext } from "react";
import { ForecastContext } from "../../hoc/forecast-context";
import { useForecast } from "../../shared/hooks/useForecast";
import { List, DailyTemperatures } from "../../shared/types";

type Props = {
  daily: DailyTemperatures;
};

export function Daily({daily}: Props) {
  const { formatTemp } = useForecast();

  if (!daily) return <div></div>;
  return (
    <>
    <div className="day">{daily.day}</div>
      <div className="min-temp">{formatTemp(daily.min)}°</div>
      <div className="max-temp">{formatTemp(daily.max)}°</div>
      <picture>
        <img src={`https://openweathermap.org/img/wn/${daily.icon}@2x.png`} alt="daily-weather-icon" />
      </picture>
    </>
  )
}
