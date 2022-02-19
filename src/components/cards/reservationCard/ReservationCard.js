import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./ReservationCardStyles";

const ReserVationCard = ({item, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Flight Name : {item.flightName}</Text>
      <Text style={styles.text}>Schedule Date : {item.scheduleDate}</Text>
      <Text style={styles.text}>Schedule Time : {item.scheduleTime}</Text>
      <Text style={styles.text}>Flight Direction : {item.flightDirection}</Text>
      <Text style={styles.text}>Flight Seat : {item.selectedSeatNumber} {item.selectedSeat}</Text>
    </TouchableOpacity>
  )
}

export default ReserVationCard