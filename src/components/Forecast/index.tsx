import moment from "moment";
import { useEffect, useState } from "react";
import { City, OpenWeather, DailyTemperatures } from "../../shared/types";
import DailyForecast from "./DailyForecast";

type Props = {
  data: OpenWeather;
  selectedCity: City;
};

function Forecast({ selectedCity, data }: Props) {
  const [minMaxTemp, setMinMaxTemp] = useState<DailyTemperatures[]>([{ day: 'Todayx', min: 0, max: 0 }]);
  const preparedData = (data: OpenWeather) => {
    return [
      ...[data.list[3]],
      ...[data.list[11]],
      ...[data.list[19]],
      ...[data.list[27]],
      ...[data.list[35]],
    ]
  };

  useEffect(() => {
    const weeklyMinMaxTemp = (data: OpenWeather) => {
      // get min and max temperature of each day (each 8 data.list obj)
      let days = [
        { min: [], max: [] },
        { min: [], max: [] },
        { min: [], max: [] },
        { min: [], max: [] },
        { min: [], max: [] },
      ] as any;

      data.list.forEach(((e, i) => {
        if (i < 8) {
          days[0].min.push(e.main.temp_min);
          days[0].max.push(e.main.temp_max);
        }
        if (i < 16) {
          days[1].min.push(e.main.temp_min);
          days[1].max.push(e.main.temp_max);
        }
        if (i < 24) {
          days[2].min.push(e.main.temp_min);
          days[2].max.push(e.main.temp_max);
        }
        if (i < 32) {
          days[3].min.push(e.main.temp_min);
          days[3].max.push(e.main.temp_max);
        }
        if (i < 40) {
          days[4].min.push(e.main.temp_min);
          days[4].max.push(e.main.temp_max);
        }
      }));

      return [
        { day: 'Today', min: Math.floor(Math.min(...days[0].min)), max: Math.floor(Math.max(...days[0].max)) },
        { day: `${moment(moment().add(1, 'days')).format("D")} ${moment(moment().add(1, 'days')).format("MMM")}`, min: Math.floor(Math.min(...days[1].min)), max: Math.floor(Math.max(...days[1].max)) },
        { day: `${moment(moment().add(2, 'days')).format("D")} ${moment(moment().add(2, 'days')).format("MMM")}`, min: Math.floor(Math.min(...days[2].min)), max: Math.floor(Math.max(...days[2].max)) },
        { day: `${moment(moment().add(3, 'days')).format("D")} ${moment(moment().add(3, 'days')).format("MMM")}`, min: Math.floor(Math.min(...days[3].min)), max: Math.floor(Math.max(...days[3].max)) },
        { day: `${moment(moment().add(4, 'days')).format("D")} ${moment(moment().add(4, 'days')).format("MMM")}`, min: Math.floor(Math.min(...days[4].min)), max: Math.floor(Math.max(...days[4].max)) },
      ];
    }
    setMinMaxTemp(weeklyMinMaxTemp(data));
  }, [data]);

  if (!data) return <div></div>;
  return (
    <>
      <section className="daily-conditions">
        <div className="date-conditions">
          {data.list &&
            <picture>
              <img src={`http://openweathermap.org/img/wn/${preparedData(data)[0].weather[0].icon}@2x.png`} alt="current-weather-icon" />
            </picture>
          }
          <div className="date-info">
            <span className="day">Today</span>
            <span className="week-day">
              {moment(new Date()).format("ddd")}, {moment(new Date()).format("D")} {moment(new Date()).format("MMM")}
            </span>
          </div>

        </div>
        <span className="temperature-value">{Math.round(preparedData(data)[0].main.feels_like)}<span className="celsius">°C</span></span>
        <span className="city-name">{selectedCity.name}, {selectedCity.country}</span>
      </section>

      <section className="weekly-forecast">
        <span className="title">Daily Forecast</span>
        <div className="row">
          {data.list && preparedData(data).map((list, index) => (
            <div className="col" key={list.dt}>
              <DailyForecast list={list} daily={minMaxTemp[index]} />
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Forecast;
