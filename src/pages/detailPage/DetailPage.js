import { useRoute } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import { Alert, ImageBackground, SafeAreaView, Text, View } from "react-native";
import Button from "../../components/button/Button";
import ReservationModal from "../../components/modal/ReservationModal";
import { ReservationContext } from "../../context/ReservationProvider";
import styles from "./DetailPageStyles";

const DetailPage = () => {
  const route = useRoute()
  const data = route.params.item
  const { state, dispatch } = useContext(ReservationContext)
  const [isVisible, setIsVisible] = useState(false)
  const seatData = useRef(null)

  const handleSeatSelection = () => {
    data.flightDirection === "D" ?
      new Date(data.scheduleDateTime).getTime() > new Date().getTime()
        ? setIsVisible(true)
        : Alert.alert("time Flights can be reserved")
      : Alert.alert("Only Departure Flights can be reserved")
  }

  const handleAddReservation = async (flight) => {
    dispatch({ type: 'ADD_RESERVATIONS', payload: { flight } })
    try {
      await Object.assign(data, seatData.current)

    } catch (error) {
      console.log(error)
    }
  }

  const handleSeatData = async (selectedSeat, selectedSeatNumber) => {
    seatData.current = { selectedSeat: selectedSeat, selectedSeatNumber: selectedSeatNumber }
    console.log(seatData)
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
          <Button title="Reserve" onPress={handleSeatSelection} />
        </View>
        {
          isVisible && <View style={styles.bottomContainer}>
            <ReservationModal
              sendData={handleSeatData}
              addReservation={() => handleAddReservation(data)}
              onClose={() => setIsVisible(false)}
            />
          </View>
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

export default DetailPage