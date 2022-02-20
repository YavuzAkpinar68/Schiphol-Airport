import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

import DetailPage from "../pages/detailPage/DetailPage"
import MainPage from "../pages/mainPage/MainPage"
import ReservationPage from "../pages/reservationPage/ReservationPage"

const Stack = createNativeStackNavigator()

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="ReservationPage" component={ReservationPage}/>
    </Stack.Navigator>
  )
}

export default StackScreens