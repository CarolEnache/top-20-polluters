import React from 'react';
import { Element } from './styled';

interface CardProps {
  keys: string[];
  polluter: string;
}

const Card = ({ keys = [], polluter }: CardProps) => {
  console.log(polluter, keys);
  return keys.map((key: any) => (
    <Element key={key} data-testid='element'>
      <strong>{key}: </strong>
      {polluter[key]}
    </Element>
  ));
};

export default Card;
