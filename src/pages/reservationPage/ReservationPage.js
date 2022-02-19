import { useNavigation } from "@react-navigation/native"
import React, { useContext } from "react"
import { FlatList,  SafeAreaView, Text } from "react-native"
import ReserVationCard from "../../components/cards/reservationCard/ReservationCard"
import { ReservationContext } from "../../context/ReservationProvider"

const ReservationPage = () => {
  const {state} = useContext(ReservationContext)
  const navigation = useNavigation()
  console.log(state)

  const handleRender = ({item}) => (
    <ReserVationCard item={item} onPress={() => navigation.navigate('DetailPage', {item:item})}/>
  )

  
  
  return(
    <SafeAreaView>
      <FlatList keyExtractor={(index) => String(index)} data={state.Reservations} renderItem={handleRender}/>
    </SafeAreaView>
  )
}

export default ReservationPage