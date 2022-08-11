import styled from 'styled-components';
import ListContent from 'containers/ListContent/index';
import AppContext from 'context/AppContext';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <AppContext>
        <ListContent />
      </AppContext>
    </Wrapper>
  );
};

export default App;
