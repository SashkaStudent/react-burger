import modalOverlayStyles from "./modal-overlay.module.css"
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");


function ModalOverlay({children, handleOnClose }) {

  const onOverlayClick = (e)=>{
    if(e.target.classList.contains(modalOverlayStyles.overlay)){
      handleOnClose(e);
    }
  }

  return createPortal(
    (<div className={`${modalOverlayStyles.overlay}`} onClick={onOverlayClick}>
      {children}
    </div>),
    modalRoot
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  handleOnClose: PropTypes.func
}

export default ModalOverlay;