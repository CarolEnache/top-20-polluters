import React from 'react';

const Button = ({ keys = [], polluter, onClick }) => {
  return keys.map((key) => {
    if (key === 'Name') {
      return (
        <button onClick={onClick} key={key}>
          {polluter[key]}
        </button>
      );
    }
    return null;
  });
};

export default Button;
