import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { FC } from "react";
import { useSelector } from "../../services/types/hooks";
import { ITab } from "../../services/types/tab";
import tabStyles from "./ingredients-tab.module.css";
//import { useSelector } from "react-redux";

type TIngredientsTab = {
  tabs: ITab[];
}

const IngredientsTab:FC<TIngredientsTab> = ({ tabs }) => {

  const {currentTab} = useSelector(store => store.ingredients);

  const scrollToCurrent = (value: string) => {
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`${tabStyles.tab} pt-5 pb-10`}>
      {tabs.map(({ value, text }) => (
        <Tab
          value={value}
          active={currentTab === value}
          onClick={scrollToCurrent}
          key={value}
        >
          {text}
        </Tab>
      ))}
    </div>
  );
}

// const tabPropTypes = PropTypes.shape({
//   value: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// });

// IngredientsTab.propTypes = {
//   tabs: PropTypes.arrayOf(tabPropTypes).isRequired,
// };

export default IngredientsTab;
