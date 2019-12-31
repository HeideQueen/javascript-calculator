import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  height: 250px;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const NumOpWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: ${props => (props.wider ? '70%' : '30%')};
  height: 50px;
  background-color: ${props => (props.primary ? 'green' : 'red')};
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 5px 20px 5px;
`;
