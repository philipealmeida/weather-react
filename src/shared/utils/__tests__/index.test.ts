// Imports
import {openWeatherResponse} from '../../../../test/__mocks__/openWeather.mock';
import {formatWeekly} from '../index';

describe('formatWeekly', () => {
    const expected =  { icon: '04d', day: '', acc_min: [14.85], acc_max: [19.17]};
    it('should return weekly temps accumulators, with icon', () => {
        console.table(formatWeekly(openWeatherResponse));
        expect(formatWeekly(openWeatherResponse)[0]).toEqual(expected);
    });
});