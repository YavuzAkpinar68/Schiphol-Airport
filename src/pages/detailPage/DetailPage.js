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

  const handleAddReservation =() => {
    const flight = Object.assign(data, seatData.current)
    dispatch({ type: 'ADD_RESERVATIONS', payload: { flight:flight } })
    navigation.navigate('MainPage')
  }

  const handleSeatData = async (selectedSeat, selectedSeatNumber) => {
    let seatId = Math.random()
    console.log(seatId)
    seatData.current = { selectedSeat: selectedSeat, selectedSeatNumber: selectedSeatNumber, seatId:seatId }
  }

  const handleRemove = (flight) => {
    dispatch({type:'REMOVE_RESERVATION', payload:{flight}})
    navigation.navigate('MainPage')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: "https://w.wallhaven.cc/full/73/wallhaven-7379de.jpg" }}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Text>Flight Name : {data.flightName}</Text>
          <Text>Schedule Date : {data.scheduleDate}</Text>
          <Text>Schedule Time : {data.scheduleTime}</Text>
          <Text>Flight Direction : {data.flightDirection}</Text>
          <Text>Id : {data.id}</Text>
          <Text>Service Type :  {data.serviceType}</Text>
          <Text>Terminal : {data.terminal}</Text>
          <Text>Aircraft Type : {data.aircraftType.iataMain}{data.aircraftType.iataSub}</Text>
          <Text>Aircraft Registration : {data.aircraftRegistration}</Text>
          <Text>Destinastions : {data.route.destinations}</Text>
          {
            data.selectedSeatNumber &&
            <View>
              <Text>Reservation Seat : {data.selectedSeatNumber} {data.selectedSeat}</Text>
              
            </View>
          }
          <Button title={"remove"} onPress={() => handleRemove(data)}/>
          <Button title="Reserve" onPress={handleSeatSelection} />
        </View>
        {
          isVisible && <View style={styles.bottomContainer}>
            <ReservationModal
              sendData={handleSeatData}
              addReservation={() => handleAddReservation(flight)}
              onClose={() => setIsVisible(false)}
            />
          </View>
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

export default DetailPage