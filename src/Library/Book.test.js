import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';

const bookTitle = 'Fear';
const bookAuthor = 'Thich Nhat Hanh';

test('renders learn react link', () => {
  const { getByText } = render(<Book title={bookTitle} author={bookAuthor} />);
  expect(getByText(/Fear/i)).toBeInTheDocument();
  expect(getByText(/Thich Nhat Hanh/i)).toBeInTheDocument();
});
