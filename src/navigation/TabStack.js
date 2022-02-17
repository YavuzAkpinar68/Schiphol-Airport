import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import ReservationPage from "../pages/reservationPage/ReservationPage"
import StackScreens from "./StackScreens"

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false, headerTitleAlign: "center"
      , headerTitle: () => (
        <Icon name="airplane" size={30} color="blue" />
      )
    }}>
      <Tab.Screen options={{
        tabBarIcon: () => (
          <Icon name="home" size={20} color="red" />
        )
      }} name="StackScreens" component={StackScreens} />
      <Tab.Screen options={{
        tabBarIcon: () => (
          <Icon name="pencil" size={20} color="red"/>
        )
      }} name="ReservationPage" component={ReservationPage} />
    </Tab.Navigator>
  )
}

export default TabStack