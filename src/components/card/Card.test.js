import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Card from './Card';

afterEach(cleanup);

describe('Card component', () => {
  const keys = ['CEO'];
  const polluters = { CEO: 'Michael Wirth' };

  it('renders', () => {
    const { getByTestId } = render(
      <Card keys={keys} polluter={polluters[keys[0]]} />
    );

    const eachElementInsideCard = getByTestId('element');

    expect(eachElementInsideCard).toBeInTheDocument();
  });
});
