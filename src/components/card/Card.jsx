import React from 'react';
import { Element } from './styled';

const Card = ({ keys = [], polluter }) => {
  return keys.map((key) => (
    <Element key={key}>
      <strong>{key}: </strong>
      {polluter[key]}
    </Element>
  ));
};

export default Card;
