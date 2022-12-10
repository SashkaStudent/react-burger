import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";
import PropTypes from "prop-types";

function Modal({ children, handleCloseOnClick }) {

  useEffect(() => {
    const closeByEsc = (e) => {
      console.log(e);
      if (e.key === 'Escape') {
        handleCloseOnClick(e);
      }
    }

    document.addEventListener('keydown', closeByEsc);
    return () => { document.removeEventListener('keydown', closeByEsc); }
  }, [])

  return (
    <ModalOverlay handleOnClose={handleCloseOnClick}>
      <div className={modalStyles.modal}>
        <button className={`${modalStyles.close} mt-15 mr-10`} onClick={handleCloseOnClick}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  handleCloseOnClick: PropTypes.func
}

export default Modal;
