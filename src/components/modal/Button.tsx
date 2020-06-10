import React from 'react';
import { Button, CompanyName } from './styled';
import { Polluter } from '../list/List';
interface ModalButtonProps {
  keys: string[];
  polluter: Polluter | any;
  onClick: () => number;
}

const ModalButton = ({ keys = [], polluter, onClick }: ModalButtonProps) => {
  const button = keys.map((key: string, index) => {
    if (key === 'Name') {
      const separate = polluter[key].split(',');
      return (
        <Button onClick={onClick} key={index} data-testid='modal-button'>
          <CompanyName>{separate[0]}</CompanyName>
          {separate[1]}
        </Button>
      );
    }
    return null;
  });
  return <>{button}</>;
};

export default ModalButton;
