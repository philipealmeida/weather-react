import React, { FormEvent, useEffect, useState } from "react";
import { cities, weatherAPI } from './shared/utils/'
import { City, OpenWeather } from "./shared/types";
import moment from 'moment'
import './App.css'
import Cards from "./components/Cards";

function App() {
  const [filter, setFilter] = useState<string>('');
  const [filtered, setFiltered] = useState<City[]>(cities);
  const [data, setData] = useState<OpenWeather | null>(null);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  /* Globals States
      1 input filter -> string
      2 selectedCity -> {lat: number, long: number}
      3 data from api
        req await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  */

  const onFilterChange = ( event : FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };
  const resetFilter = () => {
    setFilter('');
  };

  const selectCity = (event : React.SyntheticEvent<Element, Event>, data: City) => {
    console.table(data);
    setSelectedCity(data);
  }
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${weatherAPI.OPEN_WEATHER_URL}/forecast?lat=${selectedCity.lat}&lon=${selectedCity.long}&units=metric&lang=en&APPID=${weatherAPI.OPEN_WEATHER_API_KEY}`);
        const json = await response.json();
        setData(json);
        console.table(json);
      } catch (error) {
        throw new Error('Error on fetch OpenWeather API', { cause: error});
      }     
    };

    fetchData();

    /*
    setTimeout(() => {
      setData({
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1661342400,
                "main": {
                    "temp": 26.09,
                    "feels_like": 26.09,
                    "temp_min": 26.09,
                    "temp_max": 26.68,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1015,
                    "humidity": 71,
                    "temp_kf": -0.59
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 47,
                    "gust": 2.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-24 12:00:00"
            },
            {
                "dt": 1661353200,
                "main": {
                    "temp": 26.4,
                    "feels_like": 26.4,
                    "temp_min": 26.4,
                    "temp_max": 27.03,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1014,
                    "humidity": 63,
                    "temp_kf": -0.63
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 4.15,
                    "deg": 33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-24 15:00:00"
            },
            {
                "dt": 1661364000,
                "main": {
                    "temp": 24.8,
                    "feels_like": 25.03,
                    "temp_min": 24.16,
                    "temp_max": 24.8,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1015,
                    "humidity": 65,
                    "temp_kf": 0.64
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 3.22,
                    "deg": 47,
                    "gust": 5.86
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-24 18:00:00"
            },
            {
                "dt": 1661374800,
                "main": {
                    "temp": 22.14,
                    "feels_like": 22.37,
                    "temp_min": 22.14,
                    "temp_max": 22.14,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1016,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 3.15,
                    "deg": 51,
                    "gust": 6.98
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-24 21:00:00"
            },
            {
                "dt": 1661385600,
                "main": {
                    "temp": 21.19,
                    "feels_like": 21.45,
                    "temp_min": 21.19,
                    "temp_max": 21.19,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1015,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 81
                },
                "wind": {
                    "speed": 2.81,
                    "deg": 43,
                    "gust": 5.39
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-25 00:00:00"
            },
            {
                "dt": 1661396400,
                "main": {
                    "temp": 20.69,
                    "feels_like": 20.98,
                    "temp_min": 20.69,
                    "temp_max": 20.69,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1014,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 2.58,
                    "deg": 47,
                    "gust": 5.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-25 03:00:00"
            },
            {
                "dt": 1661407200,
                "main": {
                    "temp": 21.16,
                    "feels_like": 21.47,
                    "temp_min": 21.16,
                    "temp_max": 21.16,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1015,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 2.6,
                    "deg": 70,
                    "gust": 4.41
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                    "3h": 0.17
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-25 06:00:00"
            },
            {
                "dt": 1661418000,
                "main": {
                    "temp": 26.74,
                    "feels_like": 27.46,
                    "temp_min": 26.74,
                    "temp_max": 26.74,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1014,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 2.82,
                    "deg": 78,
                    "gust": 3.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-25 09:00:00"
            },
            {
                "dt": 1661428800,
                "main": {
                    "temp": 29.31,
                    "feels_like": 29.23,
                    "temp_min": 29.31,
                    "temp_max": 29.31,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1013,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 3.98,
                    "deg": 95,
                    "gust": 4.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-25 12:00:00"
            },
            {
                "dt": 1661439600,
                "main": {
                    "temp": 30.22,
                    "feels_like": 29.83,
                    "temp_min": 30.22,
                    "temp_max": 30.22,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1011,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 2.25,
                    "deg": 91,
                    "gust": 3.04
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-25 15:00:00"
            },
            {
                "dt": 1661450400,
                "main": {
                    "temp": 27.09,
                    "feels_like": 27.44,
                    "temp_min": 27.09,
                    "temp_max": 27.09,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1011,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 1.95,
                    "deg": 57,
                    "gust": 4.41
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-25 18:00:00"
            },
            {
                "dt": 1661461200,
                "main": {
                    "temp": 24.29,
                    "feels_like": 24.42,
                    "temp_min": 24.29,
                    "temp_max": 24.29,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1011,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 3.04,
                    "deg": 50,
                    "gust": 7.48
                },
                "visibility": 10000,
                "pop": 0.32,
                "rain": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-25 21:00:00"
            },
            {
                "dt": 1661472000,
                "main": {
                    "temp": 22.72,
                    "feels_like": 22.93,
                    "temp_min": 22.72,
                    "temp_max": 22.72,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 81
                },
                "wind": {
                    "speed": 2.67,
                    "deg": 78,
                    "gust": 6.56
                },
                "visibility": 10000,
                "pop": 0.49,
                "rain": {
                    "3h": 0.51
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-26 00:00:00"
            },
            {
                "dt": 1661482800,
                "main": {
                    "temp": 20.9,
                    "feels_like": 21.21,
                    "temp_min": 20.9,
                    "temp_max": 20.9,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 2.68,
                    "deg": 69,
                    "gust": 6.64
                },
                "visibility": 10000,
                "pop": 0.59,
                "rain": {
                    "3h": 0.7
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-26 03:00:00"
            },
            {
                "dt": 1661493600,
                "main": {
                    "temp": 22.28,
                    "feels_like": 22.6,
                    "temp_min": 22.28,
                    "temp_max": 22.28,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1009,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 3.33,
                    "deg": 82,
                    "gust": 7.77
                },
                "visibility": 10000,
                "pop": 0.66,
                "rain": {
                    "3h": 0.21
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-26 06:00:00"
            },
            {
                "dt": 1661504400,
                "main": {
                    "temp": 28.11,
                    "feels_like": 28.67,
                    "temp_min": 28.11,
                    "temp_max": 28.11,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1008,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 3.45,
                    "deg": 77,
                    "gust": 5.23
                },
                "visibility": 10000,
                "pop": 0.05,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-26 09:00:00"
            },
            {
                "dt": 1661515200,
                "main": {
                    "temp": 31.88,
                    "feels_like": 31.18,
                    "temp_min": 31.88,
                    "temp_max": 31.88,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1007,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 4.3,
                    "deg": 85,
                    "gust": 5.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-26 12:00:00"
            },
            {
                "dt": 1661526000,
                "main": {
                    "temp": 32.97,
                    "feels_like": 31.35,
                    "temp_min": 32.97,
                    "temp_max": 32.97,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 3.97,
                    "deg": 104,
                    "gust": 5.12
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-26 15:00:00"
            },
            {
                "dt": 1661536800,
                "main": {
                    "temp": 28.76,
                    "feels_like": 27.99,
                    "temp_min": 28.76,
                    "temp_max": 28.76,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1004,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 84,
                    "gust": 2.15
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-26 18:00:00"
            },
            {
                "dt": 1661547600,
                "main": {
                    "temp": 21.56,
                    "feels_like": 21.68,
                    "temp_min": 21.56,
                    "temp_max": 21.56,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 3.64,
                    "deg": 259,
                    "gust": 6.57
                },
                "visibility": 10000,
                "pop": 0.82,
                "rain": {
                    "3h": 0.58
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-26 21:00:00"
            },
            {
                "dt": 1661558400,
                "main": {
                    "temp": 20.97,
                    "feels_like": 21.05,
                    "temp_min": 20.97,
                    "temp_max": 20.97,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 136,
                    "gust": 2.36
                },
                "visibility": 10000,
                "pop": 0.7,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-27 00:00:00"
            },
            {
                "dt": 1661569200,
                "main": {
                    "temp": 19.78,
                    "feels_like": 19.93,
                    "temp_min": 19.78,
                    "temp_max": 19.78,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 23
                },
                "wind": {
                    "speed": 2.2,
                    "deg": 184,
                    "gust": 3.56
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-27 03:00:00"
            },
            {
                "dt": 1661580000,
                "main": {
                    "temp": 20.29,
                    "feels_like": 20.59,
                    "temp_min": 20.29,
                    "temp_max": 20.29,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 26
                },
                "wind": {
                    "speed": 2.88,
                    "deg": 240,
                    "gust": 4.22
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-27 06:00:00"
            },
            {
                "dt": 1661590800,
                "main": {
                    "temp": 22.18,
                    "feels_like": 22.39,
                    "temp_min": 22.18,
                    "temp_max": 22.18,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1004,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 3.19,
                    "deg": 258,
                    "gust": 3.68
                },
                "visibility": 10000,
                "pop": 0.13,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-27 09:00:00"
            },
            {
                "dt": 1661601600,
                "main": {
                    "temp": 21.8,
                    "feels_like": 22.07,
                    "temp_min": 21.8,
                    "temp_max": 21.8,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 3.43,
                    "deg": 259,
                    "gust": 4.24
                },
                "visibility": 10000,
                "pop": 0.16,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-27 12:00:00"
            },
            {
                "dt": 1661612400,
                "main": {
                    "temp": 20.84,
                    "feels_like": 21.15,
                    "temp_min": 20.84,
                    "temp_max": 20.84,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.59,
                    "deg": 262,
                    "gust": 6.75
                },
                "visibility": 10000,
                "pop": 0.68,
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-27 15:00:00"
            },
            {
                "dt": 1661623200,
                "main": {
                    "temp": 19.09,
                    "feels_like": 19.38,
                    "temp_min": 19.09,
                    "temp_max": 19.09,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.69,
                    "deg": 276,
                    "gust": 11.4
                },
                "visibility": 10000,
                "pop": 0.96,
                "rain": {
                    "3h": 1.32
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-27 18:00:00"
            },
            {
                "dt": 1661634000,
                "main": {
                    "temp": 17.66,
                    "feels_like": 17.81,
                    "temp_min": 17.66,
                    "temp_max": 17.66,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 4.96,
                    "deg": 268,
                    "gust": 11.84
                },
                "visibility": 10000,
                "pop": 0.43,
                "rain": {
                    "3h": 0.51
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-27 21:00:00"
            },
            {
                "dt": 1661644800,
                "main": {
                    "temp": 17.88,
                    "feels_like": 18.07,
                    "temp_min": 17.88,
                    "temp_max": 17.88,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1007,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 5.56,
                    "deg": 281,
                    "gust": 10.4
                },
                "visibility": 10000,
                "pop": 0.43,
                "rain": {
                    "3h": 0.27
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-28 00:00:00"
            },
            {
                "dt": 1661655600,
                "main": {
                    "temp": 16.4,
                    "feels_like": 16.39,
                    "temp_min": 16.4,
                    "temp_max": 16.4,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1007,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 5.03,
                    "deg": 277,
                    "gust": 9.56
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-28 03:00:00"
            },
            {
                "dt": 1661666400,
                "main": {
                    "temp": 15.48,
                    "feels_like": 15.09,
                    "temp_min": 15.48,
                    "temp_max": 15.48,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1009,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.98,
                    "deg": 280,
                    "gust": 8.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-28 06:00:00"
            },
            {
                "dt": 1661677200,
                "main": {
                    "temp": 19.36,
                    "feels_like": 18.68,
                    "temp_min": 19.36,
                    "temp_max": 19.36,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 5.14,
                    "deg": 283,
                    "gust": 6.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-28 09:00:00"
            },
            {
                "dt": 1661688000,
                "main": {
                    "temp": 23.12,
                    "feels_like": 22.4,
                    "temp_min": 23.12,
                    "temp_max": 23.12,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 5.27,
                    "deg": 281,
                    "gust": 6.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-28 12:00:00"
            },
            {
                "dt": 1661698800,
                "main": {
                    "temp": 23.65,
                    "feels_like": 22.98,
                    "temp_min": 23.65,
                    "temp_max": 23.65,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1009,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.16,
                    "deg": 282,
                    "gust": 6.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-28 15:00:00"
            },
            {
                "dt": 1661709600,
                "main": {
                    "temp": 20.36,
                    "feels_like": 19.63,
                    "temp_min": 20.36,
                    "temp_max": 20.36,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1010,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.14,
                    "deg": 287,
                    "gust": 6.06
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-28 18:00:00"
            },
            {
                "dt": 1661720400,
                "main": {
                    "temp": 16.28,
                    "feels_like": 15.58,
                    "temp_min": 16.28,
                    "temp_max": 16.28,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1012,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.2,
                    "deg": 307,
                    "gust": 8.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-28 21:00:00"
            },
            {
                "dt": 1661731200,
                "main": {
                    "temp": 14.12,
                    "feels_like": 13.47,
                    "temp_min": 14.12,
                    "temp_max": 14.12,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1013,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.1,
                    "deg": 283,
                    "gust": 6.68
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-29 00:00:00"
            },
            {
                "dt": 1661742000,
                "main": {
                    "temp": 13.08,
                    "feels_like": 12.43,
                    "temp_min": 13.08,
                    "temp_max": 13.08,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1012,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 3.01,
                    "deg": 261,
                    "gust": 6.21
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2022-08-29 03:00:00"
            },
            {
                "dt": 1661752800,
                "main": {
                    "temp": 14.26,
                    "feels_like": 13.57,
                    "temp_min": 14.26,
                    "temp_max": 14.26,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1013,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 262,
                    "gust": 6.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-29 06:00:00"
            },
            {
                "dt": 1661763600,
                "main": {
                    "temp": 18.78,
                    "feels_like": 17.97,
                    "temp_min": 18.78,
                    "temp_max": 18.78,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1013,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 261,
                    "gust": 5.16
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2022-08-29 09:00:00"
            }
        ],
        "city": {
            "id": 6545310,
            "name": "Mitte",
            "coord": {
                "lat": 52.5234,
                "lon": 13.4114
            },
            "country": "DE",
            "population": 329078,
            "timezone": 7200,
            "sunrise": 1661313823,
            "sunset": 1661364855
        }
      });
    
    }, 800);
    */

  }, [selectedCity])

  useEffect(() => {
    const filtered = () => {
      const cities_filtered = cities.filter(c => c.name.toLowerCase().includes(filter.toLocaleLowerCase()) || filter === '');
      setFiltered(cities_filtered.length ? cities_filtered : cities);
    };
    filtered();
  }, [filter])

  // console.table(data);

  if (data) {
    return (
      <main className="App">
        <article>
          <section className="hero">
            <header>
              <section className="filters">
                <div className="wrapper-filter">
                  <input type="text" placeholder="Search City" value={filter} onChange={onFilterChange} />
                  <button type="button" onClick={resetFilter}>All places</button>
                </div>
              </section>
              <h1 className="hero-title">World<span className="bold"> Weather</span></h1>
            </header>
            <Cards cities={filtered} selectCity={selectCity} selectedCity={selectedCity}/>
          </section>

          <aside>
            <header>
              <ul>
                <li>
                  <a>Notifications <span className="alerts">3</span></a>
                </li>
                <li>
                  <a>Places</a>
                </li>
              </ul>
              <div className="user-avatar">
                <img src="" alt="" />
              </div>
            </header>

            <section className="current-conditions">
              <div className="date-conditions">
                { data.list && 
                    <picture>
                      <img src={`https://openweathermap.org/img/w/${data.list[0].weather.icon}2x.png`} alt="" />
                    </picture>
                }
                <div className="date-info">
                  <span className="day">Today</span>
                  <span className="week-day">
                    {moment(new Date()).format("ddd")}, {moment(new Date()).format("D")} {moment(new Date()).format("MMM")}
                  </span>
                </div>

              </div>
              <span className="temperature-value">{Math.round(data.list[0].main.temp)}<span className="celsius">°C</span></span>
              <span className="city-name">{selectedCity.name}, {selectedCity.country}</span>
            </section>

            <section className="chance-to-rain">
              <span className="title">Chance of rain</span>
              <div className="row">
                <div className="rain-chances">
                  <span>sunny</span>
                  <span>rainy</span>
                  <span>heavy rain</span>
                </div>
                <div className="charts">
                  <span className="bar" data-rain-percentual="20"></span>
                  <span className="bar active" data-rain-percentual="80"></span>
                  <span className="bar" data-rain-percentual="30"></span>
                  <span className="bar" data-rain-percentual="40"></span>
                  <span className="bar" data-rain-percentual="50"></span>
                  <span className="bar" data-rain-percentual="70"></span>
                </div>
              </div>

              <div className="daily-hours">
                <span>10AM</span>
                <span>12AM</span>
                <span>2PM</span>
                <span>4PM</span>
                <span>6PM</span>
                <span>8PM</span>
              </div>
            </section>

          </aside>
        </article>
      </main>
    )
  }
}

export default App;
