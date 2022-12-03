import {
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import data from "../../utils/data";
import Price from "../price/price";
import "./burger-constructor.css";

class BurgerConstructor extends React.Component {
  constructor() {
    super();
    this.data = data;
  }

  componentDidMount() {}

  render() {
    return (
      <div className="burger-constructor pt-25 pl-4">
        <div className="pl-8 pb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <ul className="constructor-container">
          {this.data.map((value) => {
            return (
              <li
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                key={value._id}
              >
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
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          className="pt-10 pr-4"
        >
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
