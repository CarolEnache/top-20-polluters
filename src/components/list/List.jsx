import React, { useState } from 'react';
import { Modal, Button } from '../modal';
import { Card } from '../card';

const List = ({ data = [] }) => {
  const [modalId, setModalId] = useState();

  return (
    <ul>
      {!!data &&
        data.map((polluter) => {
          const keys = Object.keys(polluter);
          return (
            <li key={polluter.Rank}>
              {' '}
              <Button
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
            </li>
          );
        })}
    </ul>
  );
};

export default List;
