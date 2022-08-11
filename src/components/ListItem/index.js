import NumberBox from 'components/NumberBox/index';
import Title from 'components/Title/index';
import { useState } from 'react';
import { StyledButton, Wrapper, Information } from './styles';

const ListItem = ({ item, position, ...props }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <Wrapper {...props} onMouseEnter={() => setIsShowInfo(true)} onMouseLeave={() => setIsShowInfo(false)}>
      <StyledButton>
        <NumberBox>{position}</NumberBox>
        <Title primary>{item}</Title>
        {isShowInfo && <Information>click me</Information>}
      </StyledButton>
    </Wrapper>
  );
};

export default ListItem;
