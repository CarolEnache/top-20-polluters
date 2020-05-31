import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: ${appear};
  animation-duration: 300ms;
`;

export const ModalDialog = styled.div`
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${slideIn};
  animation-duration: 0.5s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
`;

export const ModalClose = styled.span`
  cursor: pointer;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
`;

export const ModalBody = styled.div`
  overflow: auto;
`;

export const ModalContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const Button = styled.button`
  width: 100%;
  background: transparent;
  padding: 1rem;
  border-radius: 10px;
  outline: none;

  &:hover {
    box-shadow: 0 0 5px #888;
  }
`;
