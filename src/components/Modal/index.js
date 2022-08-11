import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import closeIcon from 'assets/icons/close.svg';
import { Body, Header, Wrapper } from './styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return createPortal(
    <Wrapper>
      <>
        <Header>
          <img onClick={handleClose} src={closeIcon} alt="close" />
        </Header>
        <Body>{children}</Body>
      </>
    </Wrapper>,
    modalNode
  );
};

export default Modal;
