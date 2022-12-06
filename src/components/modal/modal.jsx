import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css'

function Modal(){
    return (
        <div className={modalStyles.modal}>
          <CloseIcon type="primary"/>
          <p>034536</p>
          <p>Идентификатор заказа</p>
        </div>
    );
}

export default Modal;