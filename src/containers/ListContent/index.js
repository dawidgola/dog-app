import React, { useContext, useEffect, useState } from 'react';
import List from 'components/List';
import Title from 'components/Title/index';
import ModalContentDetails from 'containers/ModalContentDetails';
import { getAllBreeds } from 'api/index';
import { Context } from 'context/AppContext';
import Modal from 'components/Modal/index';

const ListContent = () => {
  const { isOpenModal, handleCloseModal, handleSelectedItem } = useContext(Context);

  const [breedsList, setBreedsList] = useState([]);

  const getData = async () => {
    const breeds = await getAllBreeds();
    setBreedsList(breeds);
  };

  useEffect(() => getData, []);

  return (
    <>
      <Title color="black">Breed List</Title>
      <List handleOpenModal={handleSelectedItem} list={breedsList} />
      {isOpenModal ? (
        <Modal
          handleClose={() => {
            handleSelectedItem(null);
            handleCloseModal();
          }}
        >
          <ModalContentDetails />
        </Modal>
      ) : null}
    </>
  );
};

export default ListContent;
