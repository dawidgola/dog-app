import { getBreedImage } from 'api/index';
import { Button } from 'components/Button/index';
import Loader from 'components/Loader/index';
import Title from 'components/Title/index';
import { Context } from 'context/AppContext';
import { useContext, useEffect, useState } from 'react';
import { BodyContainer, ManageContainer, Wrapper, ImageContainer } from './styles';

const ModalContentDetails = () => {
  const { handleCloseModal, selectedItem, handleSelectedItem } = useContext(Context);

  const [image, setImage] = useState(null);

  const getData = async () => {
    const breedImage = await getBreedImage(selectedItem);
    setImage(breedImage);
  };

  useEffect(() => getData, []);

  return (
    <Wrapper>
      {image ? (
        <>
          <Title primary bold>
            {selectedItem}
          </Title>
          <BodyContainer>
            <ImageContainer>
              <img src={image} alt="image_breed" />
            </ImageContainer>
          </BodyContainer>
          <ManageContainer>
            <Button onClick={() => getData()}>Choose different image</Button>
            <Button
              onClick={() => {
                handleSelectedItem(null);
                handleCloseModal();
              }}
            >
              Close
            </Button>
          </ManageContainer>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default ModalContentDetails;
