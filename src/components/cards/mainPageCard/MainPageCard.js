import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./MainPageCardStyles";

const MainPageCard = ({item, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Flight Name : {item.flightName}</Text>
      <Text style={styles.text}>Schedule Date : {item.scheduleDate}</Text>
      <Text style={styles.text}>Schedule Time : {item.scheduleTime}</Text>
      <Text style={styles.text}>Flight Direction : {item.flightDirection}</Text>
    </TouchableOpacity>
  )
}

export default MainPageCard