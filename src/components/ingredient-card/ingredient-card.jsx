import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Price from "../price/price";

class IngredientCard extends React.Component {
  constructor({counter, _id, image, name, price}, props) {
    super();
    this.counter = counter;
    this._id = _id;
    this.image = image;
    this.name = name;
    this.price = price;
  }

  render() {
    console.log(this.counter);
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          width: 272,
          height: 208
        }}
        key={this._id}
      >
        <img style={{ maxWidth: 240 }} src={this.image} alt={this.name} />

        {
            this.counter>0?<Counter count={this.counter} size="default" />:null
        }
        

        <Price price={this.price} extraClass="pt-2 pb-2" />

        <p className="text text_type_main-default">{this.name}</p>
      </div>
    );
  }
}

export default IngredientCard;