import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../index';
import '@testing-library/jest-dom';

import Home from '../components/Home';

it('Check if Item component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the App container is there', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId(/Add new content here./i);
  expect(container).toBeInTheDocument();
});