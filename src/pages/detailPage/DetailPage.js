import { useRoute } from "@react-navigation/native";
import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import styles from "./DetailPageStyles";

const DetailPage = () => {
  const route = useRoute()
  const data = route.params.item
  console.log(data)

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
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default DetailPage