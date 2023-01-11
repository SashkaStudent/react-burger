import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientPropTypes from "../../utils/types";
import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from "prop-types";

function BurgerConstructor({data, bun, handleMakeOrderClick}){
  return (
    <div className={`${constructorStyles.constructor} pt-25 pl-4`}>
      <div className="pl-8 pb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <ul className={constructorStyles.list}>
        {data.map((value) => {
          return (
            <li className={constructorStyles.item} key={value._id}>
              <DragIcon type="primary" />

              <ConstructorElement
                isLocked={false}
                text={value.name}
                price={value.price}
                thumbnail={value.image}
              />
            </li>
          );
        })}
      </ul>
      <div className="pl-8 pt-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${constructorStyles.container} pt-10 pr-4`}>
        <Price price={610} size="large" extraClass="pr-10" />
        <Button htmlType="button" type="primary" size="large" onClick={handleMakeOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}


BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  bun: ingredientPropTypes.isRequired,
  handleMakeOrderClick: PropTypes.func

};

export default BurgerConstructor;
