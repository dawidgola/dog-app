import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.8);
  padding: 16px;
  border: 1px solid black;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 16px;
  display: flex;
  flex: 1;
`;
