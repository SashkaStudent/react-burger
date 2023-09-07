import { ADD_INGREDIENT, DELETE_INGREDIENT, INIT_CONSTRUCTOR, MOVE, SET_BUN } from "../types/action-constants";
import { IIngredient } from "../types/ingredient";
import { IPostOrderSuccess } from "./order";

// export const SET_BUN = "SET_BUN";
// export const INIT_CONSTRUCTOR = "INIT_CONSTRUCTOR";
// export const ADD_INGREDIENT = "ADD_INGREDIENT";
// export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
// export const MOVE = 'MOVE';

// export enum Actions {
//   SET_BUN,
//   INIT_CONSTRUCTOR,
//   ADD_INGREDIENT,
//   DELETE_INGREDIENT,
//   MOVE,
//   CLEAR
// }

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