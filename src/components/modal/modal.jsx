import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import doneImg from "../../images/done.svg";

function Modal({ children, handleCloseOnClick}) {
  return (
    // <div className={modalStyles.modal}>
    //   <div className={`${modalStyles.close} pt-15 pr-10`}>
    //     <CloseIcon type="primary" />
    //   </div>
    //   <p className={`${modalStyles.number} pt-30 text text_type_digits-large`}>034536</p>
    //   <p className="text text_type_main-default pt-8">Идентификатор заказа</p>
    //   <img className={`${modalStyles.done} pt-15`} src={doneImg} alt="Done icon."></img>
    //   <p className="text text_type_main-small pt-15">Ваш заказ начали готовить</p>
    //   <p className="text text_type_main-small text_color_inactive pt-2 pb-30" >Дождитесь готовности на орбитальной станции</p>
    // </div>
    // <div>
    //   <div className={modalStyles.modal}>
    //     <div className={`${modalStyles.close} pt-15 pr-10`}>
    //       <CloseIcon type="primary" />
    //     </div>
    //     <p className={`${modalStyles.details} pt-10  text text_type_main-large`}>Детали ингредиента</p>
    //     <p className={`text text_type_main-medium pt-4`}>
    //       Биокотлета из марсианской Магнолии
    //     </p>
    //     <div className={`${modalStyles.composition} pt-8 pb-15`}>
    //     <p className={`${modalStyles.element} text text_type_main-default text_color_inactive`}>
    //         Калории,ккал <span className={modalStyles.value}>244,4</span>
    //       </p>
    //       <p className={`${modalStyles.element} text text_type_main-default text_color_inactive`}>
    //         Белки, г <span className={modalStyles.value}>12,2</span>
    //       </p>
    //       <p className={`${modalStyles.element} text text_type_main-default text_color_inactive`}>
    //         Жиры, г <span className={modalStyles.value}>17,2</span>
    //       </p>

    //       <p className={`${modalStyles.element} text text_type_main-default text_color_inactive`}>
    //         Углеводы, г <span className={modalStyles.value}>10,2</span>
    //       </p>

    //     </div>
    //   </div>
    // </div>
    <>
      <div className={modalStyles.modal}>
        <button className={`${modalStyles.close} pt-15 pr-10`} onClick={handleCloseOnClick}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
