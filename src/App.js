import React from 'react';
import styled from 'styled-components';
import { useFetch } from './custom-hooks';

import { List } from './components/list';

const App = () => {
  const { response } = useFetch('http://localhost:8080/polluters');

  return (
    <Container>
      <Title>What do we know about the top 20 global polluters?</Title>
      <SubTitle data-testid='subtitle'>
        Compare details about the fossil fuel firms behind a third of carbon
        emissions since 1965, just by{' '}
        <strong>clicking on the company name</strong>.
      </SubTitle>
      {!!response && <List data={response} />}
    </Container>
  );
};

const Title = styled.h1`
  color: white;
  background-color: #3f464a;
  margin: 0;
  padding: 1rem;
  font-family: Georgia;
  letter-spacing: 2px;

  @media (min-width: 786px) {
    padding-right: 51%;
    letter-spacing: 2px;
    margin-left: 17%;
  }
`;
const SubTitle = styled.h3`
  color: black;
  font-weight: 100;
  padding: 1rem;
  @media (min-width: 786px) {
    padding-right: 32%;
    margin: 0 16%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
