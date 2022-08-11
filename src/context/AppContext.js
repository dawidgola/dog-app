import React, { useState } from 'react';

export const Context = React.createContext({
  isOpenModal: false,
  selectedItem: null,
  handleCloseModal: () => {},
  handleOpenModal: () => {},
  handleSelectedItem: () => {},
});

const AppContext = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleSelectedItem = (values) => {
    setSelectedItem(values);
    handleOpenModal();
  };

  return (
    <Context.Provider
      value={{
        selectedItem,
        handleSelectedItem,
        isOpenModal,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
