import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
`;

export const Text = styled.p`
  margin-bottom: ${props => props.primary ? '15px' : '0px'};
  font-size: ${props => props.primary ? '20px' : '15px'};
  font-weight: 600;
  color: #3e3e3e;
`;

export const Comment = styled.span`
  font-size 13px;
`;

export const Input = styled.input`
  text-align: center;
  margin: 8px 10px 10px 0px;
  font-size: 15px;
  outline: none;
  color: #3e3e3e;
  background-color: white;
  border: 2px solid #c7c7c7;
  border-radius: 5px;

  @media (max-width: 815px) {
    display: block;
  }
`;