import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "../modal/modal.module.css";
import doneImg from "../../images/done.svg";

function OrderDetails() {
  return (
    <>
      <p className={`${modalStyles.number} pt-30 text text_type_digits-large`}>
        034536
      </p>
      <p className="text text_type_main-default pt-8">Идентификатор заказа</p>
      <img
        className={`${modalStyles.done} pt-15`}
        src={doneImg}
        alt="Done icon."
      ></img>
      <p className="text text_type_main-small pt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive pt-2 pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export default OrderDetails;
