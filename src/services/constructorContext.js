import React from 'react';

export const IngredientsContext = React.createContext({data:null});
export const ConstructorContext = React.createContext({bun: null, ingredients:[]});
export const OrderContext = React.createContext({orderNumber:0});