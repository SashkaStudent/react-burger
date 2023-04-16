import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_INGREDIENT, postOrder, SET_BUN } from "../../services/actions/burger-ingredients";
import { useDrop } from "react-dnd";
import ConstructorCard from "../constructor-card/constructor-card";

function BurgerConstructor({ }) {

  const { bun, constructor, totalPrice } = useSelector(store => store.ingredients);
  const dispatch = useDispatch();
  const handleMakeOrderClick = () => {
    dispatch(postOrder([...constructor, bun, bun]));
  }
  const [, dropTarget] = useDrop({
    accept: ["ingredient"],
    drop(ingredient) {

      if (ingredient.type === 'bun') {
        dispatch({ type: SET_BUN, bun: ingredient });
      } else {
        dispatch({ type: ADD_INGREDIENT, ingredient: ingredient });
      }

    },
    collect: monitor => ({
       type: monitor.getItemType(),
      })
  });

  const content = useMemo(() => {
    return bun ?
      (
        <>
          <div className="pl-8 pb-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          <ul ref={dropTarget} className={constructorStyles.list}>

            {
              constructor ? (
                constructor.map((value, index) => {
                  return (
                    <ConstructorCard key={index} ingredient={value} index={index} />
                  );
                })) : (<></>)
            }
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
            <Price price={totalPrice} size="large" extraClass="pr-10" />
            <Button htmlType="button" type="primary" size="large" onClick={handleMakeOrderClick}>
              Оформить заказ
            </Button>
          </div>
        </>
      )
      : <></>;
  }, [bun, constructor]);
  
  return (
    <div className={`${constructorStyles.constructor} pt-25 pl-4`}>
      {content}
    </div>
  );
}


BurgerConstructor.propTypes = {
  handleMakeOrderClick: PropTypes.func
};

export default BurgerConstructor;
