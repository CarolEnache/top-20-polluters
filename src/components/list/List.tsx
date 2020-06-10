import React, { useState } from 'react';
import { Modal, ModalButton } from '../modal';
import { Card } from '../card';
import { UnorderedList, ListItem } from './styled';

// import { Polluter } from '../modal/Button'

export interface Polluter {
  Rank: number;
  Name?: string;
  Ownership?: string;
  HQ?: string;
  CEO?: string;
  'CEO pay'?: string;
  Revenue?: string;
  'Fossil fuel production'?: string;
  'Investment in renewables'?: string;
  'Global emissions 1965-2017'?: string;
  'Projected increase in production 2018-30'?: string;
  'Projected emissions 2018-30'?: string;
  'Future projects'?: string;
}

const List = ({ data = [] }) => {
  const [modalId, setModalId] = useState<number>();

  const fn: number | any = (e: number | any) => setModalId(e);

  return (
    <UnorderedList data-testid='list'>
      {!!data &&
        data.map((polluter: Polluter) => {
          const keys = Object.keys(polluter);
          return (
            <ListItem key={polluter.Rank} data-testid='list-item'>
              {' '}
              <ModalButton
                keys={keys}
                polluter={polluter}
                onClick={() => fn(polluter.Rank)}
              />
              <Modal
                id={polluter.Rank}
                modalId={modalId}
                onClose={() => fn()}
                content={<Card keys={keys} polluter={polluter} />}
              />
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};

export default List;
