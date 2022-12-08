import modalOverlayStyles from "./modal-overlay.module.css"
import React  from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("react-modals");


function ModalOverlay({ isOpened, children, handleOnClose }) {

  const onOverlayClick = (e)=>{
    if(e.target.classList.contains(modalOverlayStyles.overlay)){
      handleOnClose(e);
    }
  }

  return createPortal(
    (<div className={`${modalOverlayStyles.overlay} ${!isOpened?modalOverlayStyles.overlay_disabled:""}`} onClick={onOverlayClick}>
      {children}
    </div>),
    modalRoot
  );
}

export default ModalOverlay;