import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"

import QrScannerPage from "../pages/qrScanPage/QrScanPage"
import ReservationPage from "../pages/reservationPage/ReservationPage"
import StackScreens from "./StackScreens"

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "wheat" }, headerStyle: { backgroundColor: "wheat" },
      tabBarShowLabel: false, headerTitleAlign: "center"
      , headerTitle: () => (
        <Icon name="airplane" size={35} color="olive" />
      )
    }}>
      <Tab.Screen options={{
        tabBarInactiveTintColor: "silver", tabBarActiveTintColor: "olive",
        tabBarIcon: ({ color }) => (
          <Icon name="home" size={30} color={color} />
        )
      }} name="StackScreens" component={StackScreens} />
      <Tab.Screen options={{
        tabBarInactiveTintColor: "silver", tabBarActiveTintColor: "olive",
        tabBarIcon: ({ color }) => (
          <Icon name="pencil" size={30} color={color} />
        )
      }} name="ReservationPage" component={ReservationPage} />
      <Tab.Screen options={{
        tabBarInactiveTintColor: "silver", tabBarActiveTintColor: "olive",
        tabBarIcon: ({ color }) => (
          <Icon name="scan-circle-outline" size={40} color={color} />
        )
      }} name="aa" component={QrScannerPage}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabStack