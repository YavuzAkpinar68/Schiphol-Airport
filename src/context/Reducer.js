import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESERVATIONS': {
      return { ...state, Reservations: action.payload }
    }
    case 'ADD_RESERVATIONS': {
      const selectedFlight = action.payload.flight

      const isInReservations = state.Reservations.findIndex(f => f.selectedSeat === selectedFlight.selectedSeat) !== -1
    
      if (isInReservations) {
        if (state.Reservations.findIndex(f => f.selectedSeatNumber === selectedFlight.selectedSeatNumber) !== -1)
        Alert.alert('Seat already Taken ')
        return state
      }
      console.log(isInReservations)
      const updatedReservations = [...state.Reservations, selectedFlight]
      AsyncStorage.setItem('@RESERVATIONS', JSON.stringify(updatedReservations))
      return { ...state, Reservations: updatedReservations }
    }
    case 'REMOVE_RESERVATION': {
      const selectedFlight = action.payload.flight

      const flightIndex = state.Reservations.findIndex(f => f.seatId === selectedFlight.seatId)
      const updatedReservations = [...state.Reservations]
      updatedReservations.splice(flightIndex, 1)
      AsyncStorage.setItem('@RESERVATIONS', JSON.stringify(updatedReservations))

      return { ...state, Reservations: updatedReservations }

    }
  }
}

export default reducer