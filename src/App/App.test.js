import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const lakeList = [
  "First lake"
];

test('renders learn react link', () => {
  const { getByText } = render(<App lakeList={lakeList}/>);
  const linkElement = getByText(/lake/i);
  expect(linkElement).toBeInTheDocument();
});
