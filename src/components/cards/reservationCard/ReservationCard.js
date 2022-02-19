import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./ReservationCardStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

const ReserVationCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.flightNameView}>
        <Icon name="flight" size={30} />
        <Text style={styles.text}>Flight Name : {item.flightName}</Text>
      </View>
      <View style={styles.flightDetailView}>
        <Text style={styles.text}>Schedule Date : {item.scheduleDate}</Text>
        <Text style={styles.text}>Schedule Time : {item.scheduleTime}</Text>
        <Text style={styles.text}>Flight Direction : {item.flightDirection}</Text>
        <Text style={styles.text}>Flight Seat : {item.selectedSeatNumber} {item.selectedSeat}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ReserVationCard