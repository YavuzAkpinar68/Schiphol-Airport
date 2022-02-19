import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
import store from "./Store";

export const ReservationContext = createContext()

const ReservationProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, store)

  const getReservations = async () => {
    try {
      const response = await AsyncStorage.getItem('@RESERVATIONS')
      return (
        response && dispatch({type:'SET_RESERVATIONS', payload: JSON.parse(response)})
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReservations()
  }, [])

  return (
    <ReservationContext.Provider value={{state, dispatch}}>
      {children}
    </ReservationContext.Provider>
  )
}

export default ReservationProvider