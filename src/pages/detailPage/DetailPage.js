import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import { Alert, ImageBackground, SafeAreaView, Text, View, Image } from "react-native";
import Button from "../../components/button/Button";
import ReservationModal from "../../components/modal/ReservationModal";
import { ReservationContext } from "../../context/ReservationProvider";
import styles from "./DetailPageStyles";
import RNQRGenerator from "rn-qr-generator";

const DetailPage = () => {
  const route = useRoute()
  const data = route.params.item
  const { dispatch } = useContext(ReservationContext)
  const [isVisible, setIsVisible] = useState(false)
  const qrCode = useRef(null)
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
    const dataWithSeat = { ...data, ...seatData.current }
    RNQRGenerator.generate({
      value: `${data.flightName}, ${data.scheduleDate}, ${data.scheduleTime}, ${data.flightDirection}, 
      ${dataWithSeat.selectedSeatNumber} ${dataWithSeat.selectedSeat}`,
      height: 300,
      width: 250,
      base64: true
    }).then((response) => {
      qrCode.current = { qrCode: response.uri }
      const flight = { ...dataWithSeat, ...qrCode.current }
      dispatch({ type: 'ADD_RESERVATIONS', payload: { flight: flight } })
      navigation.navigate('MainPage')
    })
  }

  const handleSeatData = async (selectedSeat, selectedSeatNumber) => {
    let seatId = Math.random()
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
          <View style={styles.flightDetailView}>
            {data.selectedSeat &&
              <Text style={styles.text}>ReservationDetails</Text>
            }
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Flight Name : {data.flightName}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Schedule Date : {data.scheduleDate}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Schedule Time : {data.scheduleTime}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Flight Direction : {data.flightDirection}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Id : {data.id}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Service Type :  {data.serviceType}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Terminal : {data.terminal}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Aircraft Type : {data.aircraftType.iataMain}{data.aircraftType.iataSub}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Aircraft Registration : {data.aircraftRegistration}</Text>
            <Text style={data.selectedSeat ? styles.text : styles.text1}>Destinastions : {data.route.destinations}</Text>
            {
              data.selectedSeatNumber &&
              <Text style={styles.text}>Reservation Seat : {data.selectedSeatNumber} {data.selectedSeat}</Text>
            }
          </View>
          {
            data.qrCode &&
            <View style={styles.qrView}>
              <Text style={styles.text}>QR Code</Text>
              <Image source={{ uri: data.qrCode }} style={styles.qrImage} />
            </View>
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
