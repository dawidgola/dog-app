import { getBreedImage } from 'api/index';
import { Button } from 'components/Button/index';
import Loader from 'components/Loader/index';
import Title from 'components/Title/index';
import { Context } from 'context/AppContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { BodyContainer, ManageContainer, Wrapper, ImageContainer } from './styles';

const ModalContentDetails = () => {
  const isMounted = useRef(false);
  const [image, setImage] = useState(null);
  const { handleCloseModal, selectedItem, handleSelectedItem } = useContext(Context);

  const getData = async () => {
    const breedImage = await getBreedImage(selectedItem);
    setImage(breedImage);
  };

  useEffect(() => {
    if (isMounted.current) {
      getData();
    }

    return () => {
      isMounted.current = true;
    };
  }, []);

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
