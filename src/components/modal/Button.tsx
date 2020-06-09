import React from 'react';
import { Button, CompanyName } from './styled';

interface ModalButtonProps {
  keys: string[];
  polluter: string;
  onClick: () => {};
}

const ModalButton = ({ keys = [], polluter, onClick }: ModalButtonProps) => {
  return keys.map((key: any) => {
    if (key === 'Name') {
      const separate = polluter[key].split(',');
      return (
        <Button onClick={onClick} key={key} data-testid='modal-button'>
          <CompanyName>{separate[0]}</CompanyName>
          {separate[1]}
        </Button>
      );
    }
    return null;
  });
};

export default ModalButton;
