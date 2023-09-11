import modalOverlayStyles from "./modal-overlay.module.css"
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import React, { FC } from "react";

const modalRoot = document.getElementById("react-modals");

type TModalOverlay = {
  children: JSX.Element;
  handleOnClose: Function
}

const ModalOverlay: FC<TModalOverlay> = ({children, handleOnClose }) => {

  const onOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>)=>{
    if((e.target as Element).classList.contains(modalOverlayStyles.overlay)){
      handleOnClose(e);
    }
  }

  return createPortal(
    (<div className={`${modalOverlayStyles.overlay}`} onClick={onOverlayClick}>
      {children}
    </div>),
    modalRoot!
  );
}

export default ModalOverlay;