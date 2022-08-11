import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
`;

export const Information = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid lightgray;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

export const StyledButton = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: white;
  margin: 10px 0;
  transition: width 2s, height 4s;
`;
