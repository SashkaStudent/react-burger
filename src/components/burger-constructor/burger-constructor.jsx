import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Price from "../price/price";
import constructorStyles from "./burger-constructor.module.css";

class BurgerConstructor extends React.Component {
  constructor(props) {
    super();
    this.data = props.data;
    this.bun = props.bun;
  }

  componentDidMount() {}

  render() {
    return (
      <div className={`${constructorStyles.constructor} pt-25 pl-4`}>
        <div className="pl-8 pb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${this.bun.name} (верх)`}
            price={this.bun.price}
            thumbnail={this.bun.image}
          />
        </div>
        <ul className={constructorStyles.list}>
          {this.data.map((value) => {
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
            text={`${this.bun.name} (низ)`}
            price={this.bun.price}
            thumbnail={this.bun.image}
          />
        </div>
        <div className={`${constructorStyles.container} pt-10 pr-4`}>
          <Price price={610} size="large" extraClass="pr-10" />
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    );
  }
}

export default BurgerConstructor;
