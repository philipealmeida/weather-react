import { City } from "../types"

export const cities = [
  { name: 'Berlim', country: 'Germany', lat: 52.523430, long: 13.411440 },
  { name: 'Paris', country: 'France', lat: 48.856613, long: 2.352222 },
  { name: 'Porto', country: 'Portugal', lat: 41.157944, long: 3 },
  { name: 'London', country: 'England', lat: 3, long: -8.6108 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6897, long: 139.6922 },
  { name: 'Madrid', country: 'Spain', lat: 40.4167, long: -3.7167 },
  { name: 'Rome', country: 'Italy', lat: 48.8566, long: 2.3522 },
  { name: 'Jerusalem', country: 'Israel', lat: 31.7683, long: 35.2137 },
] as City[];

export const weatherAPI = {
  OPEN_WEATHER_URL: 'https://api.openweathermap.org/data/2.5',
  OPEN_WEATHER_API_KEY: '5adf1bc71454f25f0b1a2e5324fb4ecc',
  OPEN_WEATHER_ICON_URL: 'https://openweathermap.org/img/w'
}
