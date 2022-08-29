import { createContext } from "react";

export interface ForecastContextProps {
  isFahrenheit: boolean;
  setIsFahrenheit: Function;
}

/**
 * Forecast context contains all the state and
 * utilities needed for the children components,
 * such as Forecast and Daily Forecast.
 */
export const ForecastContext = createContext<ForecastContextProps>(
  {} as ForecastContextProps
);
