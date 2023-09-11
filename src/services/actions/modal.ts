import { CLOSE_MODAL } from "../types/action-constants";

export interface ICloseModal {
  readonly type: typeof CLOSE_MODAL;
}

export type TModalAction = ICloseModal;