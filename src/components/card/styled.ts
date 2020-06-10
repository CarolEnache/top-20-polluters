import styled from 'styled-components';

interface ElementProps {
  children?: React.ReactNode;
  key: number;
}

export const Element = styled.span<ElementProps>`
  margin: 0.5rem;
`;
