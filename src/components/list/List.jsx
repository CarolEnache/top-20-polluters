import React, { useState } from 'react';
import { Modal, ModalButton } from '../modal';
import { Card } from '../card';
import { UnorderedList, ListItem } from './styled';

const List = ({ data = [] }) => {
  const [modalId, setModalId] = useState();

  return (
    <UnorderedList>
      {!!data &&
        data.map((polluter) => {
          const keys = Object.keys(polluter);
          return (
            <ListItem key={polluter.Rank} data-testid='modal-button'>
              {' '}
              <ModalButton
                keys={keys}
                polluter={polluter}
                onClick={() => setModalId(polluter.Rank)}
              />
              <Modal
                id={polluter.Rank}
                modalId={modalId}
                onClose={() => setModalId()}
                content={<Card keys={keys} polluter={polluter} />}
              />
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};

export default List;
