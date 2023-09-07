import { TypedUseSelectorHook, useSelector as selectorHook,   useDispatch as dispatchHook, } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch, AppThunk, TApplicationActions, TRootState } from '../store/store-types';

export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;

export type TAppDispatch = ThunkDispatch<TRootState, never, TApplicationActions>;
export const useDispatch = () => dispatchHook<TAppDispatch>();