import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import DetailPage from "../pages/detailPage/DetailPage"
import MainPage from "../pages/mainPage/MainPage"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage}/>
        <Stack.Screen name="DetailPage" component={DetailPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation