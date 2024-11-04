import { MdOutlineClose } from 'react-icons/md';
import ReactModal from 'react-modal';

import css from './Modal.module.css';

import { useModal } from 'helpers';
import { HeroForm } from 'components/HeroForm/HeroForm.jsx';

ReactModal.setAppElement('#root');

export function Modal() {
  const { modal, setModal } = useModal();

  function renderContentModal() {
    if (!modal) return null;

    return <HeroForm />;
  }

  function handleClose() {
    setModal({
      isOpen: false,
      type: 'create',
    });
  }

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        },
        content: {
          backgroundColor: 'transparent',
          border: 'transparent',
          overflowY: 'auto',
        },
      }}
      isOpen={modal.isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      onRequestClose={handleClose}
    >
      <MdOutlineClose className={css.close} onClick={handleClose} />
      {renderContentModal()}
    </ReactModal>
  );
}
