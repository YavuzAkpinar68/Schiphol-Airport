import React, { useContext } from "react"
import { FlatList, SafeAreaView, Text } from "react-native"
import { ReservationContext } from "../../context/ReservationProvider"

const ReservationPage = () => {
  const {state} = useContext(ReservationContext)
  console.log(state)
  return(
    <SafeAreaView>
      <FlatList data={state.Reservations} renderItem={({item}) => <Text>{item.flightName} </Text>}/>
    </SafeAreaView>
  )
}

export default ReservationPage