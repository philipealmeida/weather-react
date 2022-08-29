import { City, DailyTemperatures, DailyTemperaturesAccumulator, OpenWeather } from "../types"

export const cities = [
  { name: 'Berlin', country: 'Germany', lat: 54.033329, long: 10.45 },
  { name: 'Paris', country: 'France', lat: 48.853401, long: 2.3486 },
  { name: 'Porto', country: 'Portugal', lat: 41.149609, long: -8.61099 },
  { name: 'London', country: 'England', lat: 51.50853, long: -0.12574 },
  { name: 'Tokyo', country: 'Japan', lat: 35.689499, long: 139.691711 },
  { name: 'Madrid', country: 'Spain', lat: 40.489349, long: -3.68275 },
  { name: 'Rome', country: 'Italy', lat: 41.894741, long: 12.4839 },
  { name: 'Jerusalem', country: 'Israel', lat: 31.75, long: 35.0 },
] as City[];

export const weatherAPI = {
  OPEN_WEATHER_URL: 'https://api.openweathermap.org/data/2.5',
  OPEN_WEATHER_API_KEY: '5adf1bc71454f25f0b1a2e5324fb4ecc',
  OPEN_WEATHER_ICON_URL: 'https://openweathermap.org/img/w'
}

export const formatWeekly = (data: OpenWeather) => {
  let days = [
    { icon: '', day: '', acc_min: [], acc_max: [] },
    { icon: '', day: '', acc_min: [], acc_max: [] },
    { icon: '', day: '', acc_min: [], acc_max: [] },
    { icon: '', day: '', acc_min: [], acc_max: [] },
    { icon: '', day: '', acc_min: [], acc_max: [] },
  ] as DailyTemperaturesAccumulator[];

  data.list.forEach(((e, i) => {
    if (i < 8) {
      days[0].icon = e.weather[0].icon;
      days[0].acc_min.push(e.main.temp_min);
      days[0].acc_max.push(e.main.temp_max);
    }
    if (i < 16) {
      days[1].icon = e.weather[0].icon;
      days[1].acc_min.push(e.main.temp_min);
      days[1].acc_max.push(e.main.temp_max);
    }
    if (i < 24) {
      days[2].icon = e.weather[0].icon;
      days[2].acc_min.push(e.main.temp_min);
      days[2].acc_max.push(e.main.temp_max);
    }
    if (i < 32) {
      days[3].icon = e.weather[0].icon;
      days[3].acc_min.push(e.main.temp_min);
      days[3].acc_max.push(e.main.temp_max);
    }
    if (i < 40) {
      days[4].icon = e.weather[0].icon;
      days[4].acc_min.push(e.main.temp_min);
      days[4].acc_max.push(e.main.temp_max);
    }
  }));

  return days;
}