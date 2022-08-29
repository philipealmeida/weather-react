import React from 'react'
import { useOpenWeather } from '../../shared/hooks/useOpenWeather';
import { OpenWeather, City } from '../../shared/types';
import { weatherAPI } from '../../shared/utils';
import { ForecastContainer } from '../forecast/ForecastContainer'
import { AsideHeader } from '../header/aside/AsideHeader'

type Props = {
  selectedCity: City;
};

export function Aside({ selectedCity }: Props) {
  const url = `${weatherAPI.OPEN_WEATHER_URL}/forecast?lat=${selectedCity.lat}&lon=${selectedCity.long}&units=metric&lang=en&APPID=${weatherAPI.OPEN_WEATHER_API_KEY}`;
  const { data } = useOpenWeather(url);
  if (!data)
    return <></>

  return (
    <>
      <aside>
        <AsideHeader />
        <ForecastContainer data={data} selectedCity={selectedCity} />
      </aside>
    </>
  )
};
