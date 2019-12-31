import styled from 'styled-components';

export const NumberButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export const NumberButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #002d50;
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 5px 20px 5px;
`;
