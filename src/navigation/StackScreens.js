import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import DetailPage from "../pages/detailPage/DetailPage"
import MainPage from "../pages/mainPage/MainPage"

const Stack = createNativeStackNavigator()

const StackScreens = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen name="MainPage" component={MainPage}/>
    <Stack.Screen name="DetailPage" component={DetailPage}/>
  </Stack.Navigator>
  )
}

export default StackScreens