import React from "react";
import { SafeAreaView, Text } from "react-native";
import useFetchData from '../../hooks/useFetchData';

const MainPage = () => {
  const {data} = useFetchData()

  return(
    <SafeAreaView>
      <Text>a</Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.flightDirection}</Text>}/>
    </SafeAreaView>
  )
}

export default MainPage