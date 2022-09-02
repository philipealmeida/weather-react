import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { ForecastContext } from "../../hoc/forecast-context";
import { useForecast } from "../../shared/hooks/useForecast";
import { City, OpenWeather, DailyTemperatures } from "../../shared/types";
import { formatWeekly } from "../../shared/utils";
import ToggleUnitTemp from "../toggles/unit-temp/ToggleUnitTemp";
import { Daily } from "./Daily";

type Props = {
  data: OpenWeather;
  selectedCity: City;
};

export function Forecast({ selectedCity, data }: Props) {
  const { isFahrenheit } = useContext(ForecastContext);
  const { formatTemp } = useForecast();

  const [minMaxTemp, setMinMaxTemp] = useState<DailyTemperatures[]>([{ day: '', icon: '', min: 0, max: 0 }]);
  const preparedData = (data: OpenWeather) => {
    return [
      ...[data.list[0]],
      ...[data.list[8]],
      ...[data.list[16]],
      ...[data.list[24]],
      ...[data.list[32]],
    ]
  };

  useEffect(() => {
    const weeklyMinMaxTemp = (data: OpenWeather) => {
      const days = formatWeekly(data);
      return [
        { day: 'Today', icon: days[0].icon, min: Math.floor(Math.min(...days[0].acc_min)), max: Math.floor(Math.max(...days[0].acc_max)) },
        { day: `${moment(moment().add(1, 'days')).format("D")} ${moment(moment().add(1, 'days')).format("MMM")}`, icon: days[1].icon, min: Math.floor(Math.min(...days[1].acc_min)), max: Math.floor(Math.max(...days[1].acc_max)) },
        { day: `${moment(moment().add(2, 'days')).format("D")} ${moment(moment().add(2, 'days')).format("MMM")}`, icon: days[2].icon, min: Math.floor(Math.min(...days[2].acc_min)), max: Math.floor(Math.max(...days[2].acc_max)) },
        { day: `${moment(moment().add(3, 'days')).format("D")} ${moment(moment().add(3, 'days')).format("MMM")}`, icon: days[3].icon, min: Math.floor(Math.min(...days[3].acc_min)), max: Math.floor(Math.max(...days[3].acc_max)) },
        { day: `${moment(moment().add(4, 'days')).format("D")} ${moment(moment().add(4, 'days')).format("MMM")}`, icon: days[4].icon, min: Math.floor(Math.min(...days[4].acc_min)), max: Math.floor(Math.max(...days[4].acc_max)) },
      ] as DailyTemperatures[];
    }
    setMinMaxTemp(weeklyMinMaxTemp(data));
  }, [data]);

  return (
    <>
      <div className="forecasts-container">
        {!data ? <p>Fetching weather forecast...</p> : (
          <>
            <section className="daily-conditions">
              <div className="date-conditions">
                {data.list &&
                  <picture>
                    <img src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="current-weather-icon" />
                  </picture>
                }
                <div className="date-info">
                  <span className="day">Today</span>
                  <span className="week-day">
                    {moment(new Date()).format("ddd")}, {moment(new Date()).format("D")} {moment(new Date()).format("MMM")}
                  </span>
                </div>
              </div>
              <span className="temperature-value">{formatTemp(data.list[0].main.temp)}
                <span className="unit-temp">°{isFahrenheit ? 'F' : 'C'}</span>
              </span>
              <span className="city-name">{selectedCity.name}, {selectedCity.country}</span>
              <div>
                <ToggleUnitTemp />
              </div>
            </section>

            <section className="weekly-forecast">
              <span className="title">Daily Forecast</span>
              <div className="row">
                {data.list && preparedData(data).map((list, index) => (
                  <div className="col" key={list.dt}>
                    <Daily daily={minMaxTemp[index]} />
                  </div>
                ))}
              </div>

            </section>
          </>
        )
        }
      </div>
    </>
  )
}
