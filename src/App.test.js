import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { mockResponse } from './mock';

import { List } from './components/list';

afterEach(cleanup);

describe('App', () => {
  it('render', () => {
    const { getByText, getByTestId } = render(<App />);

    const Title = getByText(
      'What do we know about the top 20 global polluters?'
    );

    const SubTitle = getByTestId('subtitle');

    expect(Title).toBeInTheDocument();
    expect(SubTitle).toBeInTheDocument();
  });

  it('fetching the data and displays a List of buttons', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });
    });

    const { queryAllByTestId, getByText, getByTestId } = render(
      <List data={mockResponse} data-testid='list-of-buttons' />
    );

    expect(await queryAllByTestId('list-item')).toHaveLength(2);
    expect(await getByText('Chevron')).toBeInTheDocument();

    const modalButton = await getByText('Chevron');
    fireEvent.click(modalButton);

    expect(getByTestId('modal-dialog')).toBeInTheDocument();
  });
});
