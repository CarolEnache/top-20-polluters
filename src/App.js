import React from 'react';
import styled from 'styled-components';
import { useFetch } from './custom-hooks';

import { List } from './components/list';

const App = () => {
  const { response } = useFetch('http://localhost:8080/polluters');

  return (
    <>
      <Title>Top twenty polluters</Title>
      {!!response && <List data={response} />}
    </>
  );
};

const Title = styled.h1`
  color: red;
`;

export default App;
