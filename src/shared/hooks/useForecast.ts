import { useContext } from "react";
import { ForecastContext } from "../../hoc/forecast-context";

export const useForecast = () => {
  const { isFahrenheit } = useContext(ForecastContext);
  const formatTemp = (data:number) => {
    if (!data) return;
    if (isFahrenheit){
      return Math.round(data * 9/5 + 32);
    }
    return Math.round(data);
  };

  return {formatTemp};
};