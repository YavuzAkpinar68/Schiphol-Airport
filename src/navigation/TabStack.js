import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import ReservationPage from "../pages/reservationPage/ReservationPage"
import StackScreens from "./StackScreens"

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="StackScreens" component={StackScreens} />
      <Tab.Screen name="ReservationPage" component={ReservationPage}/>
    </Tab.Navigator>
  )
}

export default TabStack