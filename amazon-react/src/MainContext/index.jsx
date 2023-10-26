import React, { createContext, useReducer } from 'react'
import { useContext } from 'react';
import { FormReducer, InitialValue } from './Reducer__';

const MainContext =  createContext(null)
export const MainProvider = ({children}) => {
  const [state, dispatch] = useReducer(FormReducer, InitialValue); 
 
  return (
    <>
     <MainContext.Provider value={{state, dispatch}}>
    {children}
     </MainContext.Provider>
    </>
  )
}
export const useMain = () => {
  return useContext(MainContext);
 }