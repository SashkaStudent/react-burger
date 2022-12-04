import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import priceStyles from "./price.module.css";

class Price extends React.Component {
    constructor(props){
        super();
        this.price = props.price;
        this.size = props.size;
        this.props = props;
    }

    render(){
      const textStyle = this.size==="large"?"text text_type_digits-medium":"text text_type_digits-default";
        return (
            <div className={`${priceStyles.price} ${this.props.extraClass}`}>
                <p className={`${textStyle} pr-2`}>{this.price}</p>
                <CurrencyIcon type="primary" />
            </div>
        )
    }
}

export default Price;