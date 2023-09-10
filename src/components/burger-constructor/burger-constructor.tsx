import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { FC, useMemo } from "react";
import { postOrder } from "../../services/actions/order";
import { useDrop } from "react-dnd";
import ConstructorCard from "../constructor-card/constructor-card";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "../../services/types/hooks";
import { IIngredient } from "../../services/types/ingredient";
import { ADD_INGREDIENT, SET_BUN } from "../../services/types/action-constants";

const BurgerConstructor: FC = () => {
  const { bun, ingredients, totalPrice } = useSelector(store => store.constructor);
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMakeOrderClick = () => {
    if (user.isAuthenticated) {
      const postArray = ingredients.map(ing => ing._id);
      postArray.push(bun!._id, bun!._id);
      dispatch(postOrder(postArray, localStorage.getItem("accessToken")));
    } else {

      navigate("/login");
    }

  }
  const [, dropTarget] = useDrop({
    accept: ["ingredient", "bun"],
    drop(ingredient: IIngredient) {

      if (ingredient.type === 'bun') {
        dispatch({ type: SET_BUN, bun: ingredient });
      } else {
        dispatch({ type: ADD_INGREDIENT, ingredient: ingredient, uuid: uuidv4() });
      }

    },
    collect: monitor => ({
      type: monitor.getItemType(),
    })
  });

  const [, dropBunTarget] = useDrop({
    accept: ["bun"],
    drop(ingredient: IIngredient) {

      if (ingredient.type === 'bun') {
        dispatch({ type: SET_BUN, bun: ingredient });
      }

    },
    collect: monitor => ({
      type: monitor.getItemType(),
    })
  });

  const bunIsSet = () => {
    if (bun && bun?.type == "bun") {
      return true;
    } else return false;

  }

  const content = useMemo(() => {
    return bunIsSet() ?
      (
        <>
          <div className="pl-8 pb-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun!.name} (верх)`}
              price={bun!.price}
              thumbnail={bun!.image}
            />
          </div>
          <ul ref={dropTarget} className={constructorStyles.list}>

            {
              ingredients ? (
                ingredients.map((value, index) => {
                  return (
                    <ConstructorCard key={value.key} ingredient={value} index={index} />
                  );
                })) : (<></>)
            }
          </ul>
          <div className="pl-8 pt-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun!.name} (низ)`}
              price={bun!.price}
              thumbnail={bun!.image}
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
      : <div ref={dropBunTarget} className={`${constructorStyles.emptyConstructor} pl-8 pb-4`}>
        <p className="text text_type_main-default text_color_inactive">
          Пожалуйста, перенесите сюда булку, а затем другие ингредиенты для создания заказа
        </p>
      </div>;
  }, [bun, ingredients, user]);

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
