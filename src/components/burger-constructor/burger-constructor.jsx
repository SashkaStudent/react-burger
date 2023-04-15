import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientPropTypes from "../../utils/types";
import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import { useContext, useMemo, useReducer } from "react";
import { ConstructorContext } from "../../services/constructorContext";
import { useSelector } from "react-redux";


// function BurgerConstructor({data, bun, handleMakeOrderClick}){
function BurgerConstructor({ handleMakeOrderClick }) {

  const {bun, ingredients} = useSelector(store=> store.constructor);

  console.log(bun?true:false);

  const totalPrice = ()=>{
    const bunsSum = bun.price * 2;
    const ingSum = ingredients.reduce((prev, curr)=>prev+curr.price, 0);
    return bunsSum + ingSum;
  }
// const content = 
// ()=>{
//  return bun?
//   ( <p>yep</p>)
//   :
//   (<p>nope</p>); 
// }
const content = useMemo(()=>{
  return bun?
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
<ul className={constructorStyles.list}>
        {ingredients.map((value) => {
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
        <Price price={totalPrice()} size="large" extraClass="pr-10" />
        <Button htmlType="button" type="primary" size="large" onClick={handleMakeOrderClick}>
          Оформить заказ
        </Button>
      </div>
</>
)
  :<></>;
}, [bun, ingredients]);
 /* const content = useMemo (()=>{ return (
    <>
    bun ? (
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
        {ingredients.map((value) => {
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
        <Price price={totalPrice()} size="large" extraClass="pr-10" />
        <Button htmlType="button" type="primary" size="large" onClick={handleMakeOrderClick}>
          Оформить заказ
        </Button>
      </div>
    ) : <><p>empty</p></>
    </>
  );

},[bun, ingredients]); */

  //const initialState = { ingredients: constructorContext.ingredients, bun: constructorContext.bun, price: 0 };
  //const [state, dispatch] = useReducer(reducer, initialState);
  //const price = initialState.ingredients.reduce((prev, curr)=>prev+curr.price, 0);
 // dispatch({type:"calc", initialState});
//  const bun = initialState.bun;
  return (
    <div className={`${constructorStyles.constructor} pt-25 pl-4`}>
      {content}
    </div>
  );
}


BurgerConstructor.propTypes = {
  // data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  // bun: ingredientPropTypes.isRequired,
  handleMakeOrderClick: PropTypes.func

};

export default BurgerConstructor;
