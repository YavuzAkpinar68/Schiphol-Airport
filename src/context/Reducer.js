const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESERVATIONS' : {
      return {...state, Reservations: action.payload}
    }
    case 'ADD_RESERVATIONS' : {
      const selectedFlight = action.payload.flight

      const isInReservations = state.Reservations.findIndex(f => f.id === selectedFlight.id) !== -1;
      if (isInReservations) {
        return state
      }

      const updatedReservations = [...state.Reservations, selectedFlight]
      return {...state, Reservations:updatedReservations}
    }
  }
}

export default reducer