import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { mockResponse } from '../../mock';

import List from './List';

afterEach(cleanup);

describe('List component', () => {
  it('renders an empty list if no data is available', () => {
    const { getByTestId } = render(<List />);
    const unorderedList = getByTestId('list');

    expect(unorderedList).toBeInTheDocument();
  });

  it('renders the list items with modal buttons when data is available', () => {
    const { queryAllByTestId, getByTestId, getByText } = render(
      <List data={mockResponse} />
    );

    const listItem = queryAllByTestId('list-item');
    const modalButton = queryAllByTestId('modal-button');
    const modalButtonToBeClicked = getByText('Chevron');

    expect(listItem).toHaveLength(2);
    expect(modalButton).toHaveLength(2);
    fireEvent.click(modalButtonToBeClicked);
    expect(getByTestId('modal-dialog')).toBeInTheDocument();
  });

  it('opens a modal when the modal button is clicked', () => {
    const { getByTestId, getByText } = render(<List data={mockResponse} />);

    const modalButtonToBeClicked = getByText('Chevron');

    fireEvent.click(modalButtonToBeClicked);
    expect(getByTestId('modal-dialog')).toBeInTheDocument();
  });
});
