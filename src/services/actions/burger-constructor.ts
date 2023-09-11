import { ADD_INGREDIENT, DELETE_INGREDIENT, INIT_CONSTRUCTOR, MOVE, SET_BUN } from "../types/action-constants";
import { IIngredient } from "../types/ingredient";
import { IPostOrderSuccess } from "./order";

export interface IInit {
  readonly type: typeof INIT_CONSTRUCTOR;
}

export interface ISetBun {
  readonly type: typeof SET_BUN;
  readonly bun: IIngredient;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: IIngredient;
  readonly uuid: string;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: number;
}

export interface IMoveIngredient {
  readonly type: typeof MOVE;
  readonly drag: number;
  readonly drop: number;
}


export type TBurgerConstructorAction = IInit | ISetBun | IAddIngredient | IDeleteIngredient | IMoveIngredient | IPostOrderSuccess;