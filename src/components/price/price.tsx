import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import priceStyles from "./price.module.css";
import PropTypes from "prop-types";

type TPrice = {
  price: number;
  size?: string;
  extraClass?: string;
}

const Price: FC<TPrice> = ({ price, size, extraClass }) => {
  const textStyle =
    size === "large"
      ? "text text_type_digits-medium"
      : "text text_type_digits-default";
  return (
    <div className={`${priceStyles.price}  ${priceStyles.text} ${extraClass}`}>
      <p className={`${textStyle} pr-2`}>{price}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}

Price.propTypes = {
    price: PropTypes.number.isRequired
  };

export default Price;
