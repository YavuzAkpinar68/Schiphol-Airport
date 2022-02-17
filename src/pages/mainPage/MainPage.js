import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, Button, ActivityIndicator } from "react-native";
import MainPageCard from "../../components/cards/mainPageCard/MainPageCard";
import Input from "../../components/input/Input";
import useFetchData from '../../hooks/useFetchData';

const MainPage = () => {
  const [schedule, setSchedule] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [buttonSignal, setButtonSignal] = useState(false)
  const { data, loading } = useFetchData(schedule, buttonSignal, hour)
  const navigation = useNavigation()

  const handleRender = ({ item }) => (
    <MainPageCard item={item} onPress={() => navigation.navigate('DetailPage', { item: item })} />
  )

  const handleSchedule = () => {
    setSchedule(`scheduleDate=${schedule}`)
    setHour(`&scheduleTime=${hour}%3A${minute}`)
    setButtonSignal(true)
    if (buttonSignal) {
      setButtonSignal(false)
    }
  }

  return (
    <SafeAreaView>
      <Input title="Please write fly date as YYYY-MM-DD" placeholder="fly date" onChangeText={setSchedule} />
      <Input title="Please write fly hour as HH" placeholder="fly hour" onChangeText={setHour} />
      <Input title="Please write fly minute as MM" placeholder="fly minute" onChangeText={setMinute} />
      <Button title="a" onPress={handleSchedule}></Button>
      {
        loading ?
          <ActivityIndicator />
          : <FlatList data={data} renderItem={handleRender} />

      }
    </SafeAreaView>
  )
}

export default MainPage