import modalOverlayStyles from "./modal-overlay.module.css"
import { React } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("react-modals");

function ModalOverlay({ isEnabled, children }) {
  return createPortal(
    (<div className={`${modalOverlayStyles.overlay} ${!isEnabled && modalOverlayStyles.overlay_disabled}`}>
      {children}
    </div>),
    modalRoot
  );
}

export default ModalOverlay;