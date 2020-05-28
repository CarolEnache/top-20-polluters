import React from 'react';
import styled from 'styled-components';

import { useFetch } from './custom-hooks';

const App = () => {
  const { response } = useFetch('http://localhost:8080/polluters', {});
  console.log(response);

  const Title = styled.h1`
    color: red;
  `;

  return (
    <>
      <Title>Top twenty polluters</Title>
    </>
  );
};

export default App;
