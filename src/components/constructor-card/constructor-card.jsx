import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT, MOVE } from "../../services/actions/burger-constructor";
import constructorCardStyles from "./constructor-card.module.css"
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/types";

function ConstructorCard({ ingredient, index }) {

  const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: "card",
        item: {index},
    });
    const [{isOver}, dropTarget] = useDrop({
        accept: ['card'], 
        drop(item){
          dispatch({type:MOVE, drag:item.index, drop:index});

        },
        collect: monitor=>(
          {
            isOver:!monitor.isOver(),
          }
        )
    });


    const style = isOver ? constructorCardStyles.item : constructorCardStyles.item+" "+constructorCardStyles.itemForDrop;

    const handleDelete = () => {
        dispatch({ type: DELETE_INGREDIENT, id: index })
    }
    return (
        <>
            <li ref={dragRef} className={style}>
                <div ref={dropTarget} className={constructorCardStyles.strange}>


                    <DragIcon type="primary" />
                    <ConstructorElement
                        isLocked={false}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                        handleClose={() => { handleDelete() }}
                    />
                </div>
            </li>
        </>

    )
}

ConstructorCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  index: PropTypes.number.isRequired,

}

export default ConstructorCard;