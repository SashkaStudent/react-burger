import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";

function Modal({ children, handleCloseOnClick}) {
  return (
    <>
      <div className={modalStyles.modal}>
        <button className={`${modalStyles.close} mt-15 mr-10`} onClick={handleCloseOnClick}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
