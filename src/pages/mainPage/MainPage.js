import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator, View, ImageBackground } from "react-native";

import Button from "../../components/button/Button";
import MainPageCard from "../../components/cards/mainPageCard/MainPageCard";
import Input from "../../components/input/Input";
import useFetchData from '../../hooks/useFetchData';
import styles from "./MainPageStyles";
import directions from '../../json/directions.json'

const MainPage = () => {
  const [schedule, setSchedule] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [buttonSignal, setButtonSignal] = useState(false)
  const [flightDirection, setFlightDirection] = useState('')
  const { data, loading } = useFetchData(schedule, buttonSignal, hour)
  const navigation = useNavigation()
  
  const handleRender = ({ item }) => (
    <MainPageCard item={item} onPress={() => navigation.navigate('DetailPage', { item: item })} />
  )

  const handleDirections = (direction) => {
    setFlightDirection(direction)
  }

  const handleSchedule = () => {
    setSchedule(`scheduleDate=${schedule}`)
    hour ? setHour(`&scheduleTime=${hour}%3A${minute}`) : setHour('')
    setButtonSignal(true)
    if (buttonSignal) {
      setButtonSignal(false)
    }
  }

  const source = flightDirection ? data.filter(a => a.flightDirection.includes(flightDirection.slice(0, 1))) : data

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={{ uri: 'https://w.wallhaven.cc/full/95/wallhaven-95y7v8.jpg' }}>
        <View style={styles.dateView}>
          <Input title="Please write fly date as YYYY-MM-DD" placeholder="Flight date..." onChangeText={setSchedule} />
          <Button iconName="search" iconSize={30} onPress={handleSchedule} />
        </View>
        <View style={styles.timeView}>
          <Input title="Please write fly hour as HH" placeholder="Flight hour..." onChangeText={setHour} />
          <Input title="Please write fly minute as MM" placeholder="Flight minute..." onChangeText={setMinute} />
        </View>
        <View style={styles.directionView}>
          {directions.map((direction, index) => {
            return (
              <Button theme="directionButton" key={index} title={direction} onPress={handleDirections} />
            )
          })}
        </View>
        {
          loading ?
            <ActivityIndicator />
            : <FlatList data={flightDirection === 'All' ? data : source} renderItem={handleRender} />
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

export default MainPage