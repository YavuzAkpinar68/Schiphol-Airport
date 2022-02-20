import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./MainPageCardStyles";

const MainPageCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.flightNameView}>
        <Icon name="flight" size={30} />
        <Text style={styles.text}>Flight Name : {item.flightName}</Text>
      </View>
      <View style={styles.flightDetailView}>
        <Text style={styles.text}>Schedule Date : {item.scheduleDate}</Text>
        <Text style={styles.text}>Schedule Time : {item.scheduleTime}</Text>
        <Text style={styles.text}>Flight Direction : {item.flightDirection === 'D' ? 'Departure' : 'Abroad'}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MainPageCard