import { useState } from 'react';
import { modalProvider } from './modalContext.js';

export const ModalProvider = ({ children }) => {
  const defaultModal = {
    isOpen: false,
    type: 'create',
  };

  const [modal, setModal] = useState(defaultModal);

  return <modalProvider.Provider value={{ modal, setModal }}>{children}</modalProvider.Provider>;
};
