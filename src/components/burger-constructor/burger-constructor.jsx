import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postOrder } from "../../services/actions/order.js";
import { ADD_INGREDIENT, SET_BUN } from "../../services/actions/burger-constructor";
import { useDrop } from "react-dnd";
import ConstructorCard from "../constructor-card/constructor-card";


function BurgerConstructor({ }) {
  const getStore = store => store.constructor;
  const { bun, ingredients, totalPrice } = useSelector(getStore);
  const dispatch = useDispatch();
  const handleMakeOrderClick = () => {

    const postArray = ingredients.map(ing=>ing._id);
    postArray.push(bun._id, bun._id);
    dispatch(postOrder(postArray));
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
              ingredients ? (
                ingredients.map((value, index) => {
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
  }, [bun, ingredients]);
  
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
