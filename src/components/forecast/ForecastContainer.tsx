import { useState } from "react";
import { ForecastContext, ForecastContextProps } from "../../hoc/forecast-context";
import { City, OpenWeather } from "../../shared/types";
import { Forecast } from "./Forecast";

type Props = {
  data: OpenWeather | null;
  selectedCity: City;
};

export function ForecastContainer({ data, selectedCity }: Props) {
  const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);
  const value:ForecastContextProps = { isFahrenheit, setIsFahrenheit };

  if (!data) 
    return <div></div>;

  return (
    <>
      <ForecastContext.Provider value={value}>
        <Forecast selectedCity={selectedCity} data={data} />
      </ForecastContext.Provider>
    </>
  )
}
