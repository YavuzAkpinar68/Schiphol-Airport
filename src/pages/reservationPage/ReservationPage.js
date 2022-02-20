import { useNavigation } from "@react-navigation/native"
import React, { useContext } from "react"
import { FlatList, ImageBackground, SafeAreaView, Text } from "react-native"
import ReserVationCard from "../../components/cards/reservationCard/ReservationCard"
import { ReservationContext } from "../../context/ReservationProvider"
import styles from "./ReservationPageStyles"

const ReservationPage = () => {
  const { state } = useContext(ReservationContext)
  const navigation = useNavigation()
  console.log(state)

  const handleRender = ({ item, index }) => (
    <ReserVationCard item={item} onPress={() => navigation.navigate('DetailPage', { item: item })} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://w.wallhaven.cc/full/42/wallhaven-42rzzx.jpg' }}
        style={styles.container}>
        <Text style={styles.title}>Your Reservations</Text>
        <FlatList keyExtractor={(item, index) => String(index)} data={state.Reservations} renderItem={handleRender} />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ReservationPage