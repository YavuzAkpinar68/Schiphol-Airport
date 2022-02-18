import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";
import store from "./Store";

export const ReservationContext = createContext()

const ReservationProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <ReservationContext.Provider value={{state, dispatch}}>
      {children}
    </ReservationContext.Provider>
  )
}

export default ReservationProvider