import styled from 'styled-components';

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  padding: 0;
  @media (min-width: 768px) {
    width: 68%;
  }
`;

export const ListItem = styled.li`
  margin: 0.6rem;
  width: 10rem;
`;
