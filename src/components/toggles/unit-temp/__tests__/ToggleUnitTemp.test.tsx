// Imports
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { ForecastContext } from '../../../../hoc/forecast-context';
import ToggleUnitTemp from '../ToggleUnitTemp';
describe('ToggleUnitTemp renders', () => {
  const mockContextValue = {
    isFahrenheit: true,
    setIsFahrenheit: () => { }
  }

  let renderResult: RenderResult;
  const doRender = () => {
    renderResult = render(
      <ForecastContext.Provider value={mockContextValue}>
        <ToggleUnitTemp />
      </ForecastContext.Provider>);
  };

  beforeEach(() => {
    doRender();
  });

  it('should render match snapshot', () => {
    expect(renderResult).toMatchSnapshot();
  });

  describe('ToggleUnitTemp user interactions', () => {

    it('toggle with click', () => {
      const label = screen.getByTestId('toggle-unit-temp');
      fireEvent.click(label);
      expect(label).toBeDefined();
    });

    it('toggle with keydown', () => {
      const label = screen.getByTestId('toggle-unit-temp');
      fireEvent.keyDown(label, { key: 'Enter', code: 13 });
      fireEvent.keyDown(label, { key: ' ', code: 32 });
      expect(label).toBeDefined();
    });

  });

  describe('ToggleUnitTemp renders ', () => {
    const mockContextValue = {
      isFahrenheit: false,
      setIsFahrenheit: () => { }
    }
    let renderResult: RenderResult;
    const doRender = () => {
      renderResult = render(
        <ForecastContext.Provider value={mockContextValue}>
          <ToggleUnitTemp />
        </ForecastContext.Provider>);
    };

    beforeEach(() => {
      doRender();
    });

    it('should render with falsy context value', () => {
      expect(renderResult).toMatchSnapshot();
    });
  });
});


