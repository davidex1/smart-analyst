import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000dc5;
  box-shadow: 0px 1px 1px gray;
`;

export const Title = styled.p`
  padding: 10px;
  font-size: 30px;
  color: white;
`;

export const Container = styled.div`
  padding-top: 15%;
  height: 100%;
  text-align: center;
`;

export const Tile = styled.div`
  width: 180px;
  height: 180px;
  margin: 20px;
  display: inline-block;
`;

export const Icon = styled.i`
  padding: 15px 10px 10px 10px;
  font-size: ${props => props.primary ? '30px' : '120px'};
  color: ${props => props.primary ? 'white' : '#639fff'};

  &:hover {
    color: ${props => props.primary ? '#87b2ff' : '#000dc5'};
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #3e3e3e;
`;

export const TextBox = styled.div`
  position: fixed;
  left: 99%;
  margin: 80px 0px 0px -240px;
  padding: 10px;
  width: 215px;
  height: 110px;
  background-color: #fcfdff;
  color: #3e3e3e; 
  border-radius: 5px;
  box-shadow: 0px 0px 5px gray;
  font-size: 13px;
  text-align: justify;
  
`;