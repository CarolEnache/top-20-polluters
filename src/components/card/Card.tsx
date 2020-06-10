import React from 'react';
import { Element } from './styled';

import { Polluter } from '../list/List';

interface CardProps {
  keys: string[];
  polluter: Polluter;
}

const Card = ({ keys = [], polluter }: CardProps) => {
  const content = keys.map((key, index) => (
    <Element key={index} data-testid='element'>
      <strong>{key}: </strong>
      {polluter[key]}
    </Element>
  ));
  return <>{content}</>;
};

export default Card;
