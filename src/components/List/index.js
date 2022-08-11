import ListItem from 'components/ListItem/index';
import Loader from 'components/Loader/index';
import { StyledList, Wrapper } from './styles';

const List = ({ handleOpenModal = () => {}, list = [] }) => {
  return (
    <Wrapper>
      <>
        {list.length > 0 ? (
          <StyledList>
            {list.map((breed, key) => (
              <ListItem item={breed} key={key} position={key + 1} onClick={() => handleOpenModal(breed)} />
            ))}
          </StyledList>
        ) : (
          <Loader />
        )}
      </>
    </Wrapper>
  );
};

export default List;
