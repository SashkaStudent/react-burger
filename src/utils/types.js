import PropTypes from "prop-types";

export const ingredientPropTypes = PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
    
  });

 export const cardOrderPropTypes = PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    number: PropTypes.number,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    
  });

  //export default ingredientPropTypes;