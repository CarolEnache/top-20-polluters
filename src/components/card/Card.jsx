import React from 'react';

const Card = ({ keys = [], polluter }) => {
  return keys.map((key) => (
    <span key={key}>
      <strong>{key}:</strong>
      {polluter[key]}
    </span>
  ));
};

export default Card;
