import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import { Alert, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Button from "../../components/button/Button";
import ReservationModal from "../../components/modal/ReservationModal";
import { ReservationContext } from "../../context/ReservationProvider";
import styles from "./DetailPageStyles";

const DetailPage = () => {
  const route = useRoute()
  const data = route.params.item
  const { dispatch } = useContext(ReservationContext)
  const [isVisible, setIsVisible] = useState(false)
  const seatData = useRef(null)
  const navigation = useNavigation()

  const handleSeatSelection = () => {
    data.flightDirection === "D" ?
      new Date(data.scheduleDateTime).getTime() > new Date().getTime()
        ? setIsVisible(true)
        : Alert.alert("time Flights can be reserved")
      : Alert.alert("Only Departure Flights can be reserved")
  }

  const handleAddReservation = () => {
    const flight = Object.assign(data, seatData.current)
    dispatch({ type: 'ADD_RESERVATIONS', payload: { flight: flight } })
    navigation.navigate('MainPage')
  }

  const handleSeatData = async (selectedSeat, selectedSeatNumber) => {
    let seatId = Math.random()
    console.log(seatId)
    seatData.current = { selectedSeat: selectedSeat, selectedSeatNumber: selectedSeatNumber, seatId: seatId }
  }

  const handleRemove = (flight) => {
    dispatch({ type: 'REMOVE_RESERVATION', payload: { flight } })
    navigation.navigate('MainPage')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: "https://w.wallhaven.cc/full/73/wallhaven-7379de.jpg" }}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Flight Name : {data.flightName}</Text>
          <Text style={styles.text}>Schedule Date : {data.scheduleDate}</Text>
          <Text style={styles.text}>Schedule Time : {data.scheduleTime}</Text>
          <Text style={styles.text}>Flight Direction : {data.flightDirection}</Text>
          <Text style={styles.text}>Id : {data.id}</Text>
          <Text style={styles.text}>Service Type :  {data.serviceType}</Text>
          <Text style={styles.text}>Terminal : {data.terminal}</Text>
          <Text style={styles.text}>Aircraft Type : {data.aircraftType.iataMain}{data.aircraftType.iataSub}</Text>
          <Text style={styles.text}>Aircraft Registration : {data.aircraftRegistration}</Text>
          <Text style={styles.text}>Destinastions : {data.route.destinations}</Text>
          {
            data.selectedSeatNumber &&
            <Text style={styles.text}>Reservation Seat : {data.selectedSeatNumber} {data.selectedSeat}</Text>
          }
        </View>
        <View style={styles.buttonContainer}>
          {
            data.selectedSeatNumber &&
            <Button theme="reservationButton" title="Remove Reservation" onPress={() => handleRemove(data)} />
          }
          <Button theme="reservationButton" title="Reserve" onPress={handleSeatSelection} />
        </View>
        {
          isVisible && <View style={styles.bottomContainer}>
            <ReservationModal
              sendData={handleSeatData}
              addReservation={(flight) => handleAddReservation(flight)}
              onClose={() => setIsVisible(false)}
            />
          </View>
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

export default DetailPage