import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import tabStyles from "./ingredients-tab.module.css";

function IngredientsTab({ tabs, defaultState }) {
  const [current, setCurrent] = React.useState(defaultState!== undefined?defaultState:tabs[0].value);
  const scrollToCurrent = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`${tabStyles.tab} pt-5 pb-10`}>
      {tabs.map(({ value, text }) => (
        <Tab
          value={value}
          active={current === value}
          onClick={scrollToCurrent}
          key={value}
        >
          {text}
        </Tab>
      ))}
    </div>
  );
}

const tabPropTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

IngredientsTab.propTypes = {
  tabs: PropTypes.arrayOf(tabPropTypes).isRequired,
  defaultState: PropTypes.string
};

export default IngredientsTab;
