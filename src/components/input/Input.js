import React from "react";
import { Text, TextInput, View } from "react-native";

const Input = ({title, onChangeText, placeholder}) => {
  return(
    <View>
      <Text>{title}</Text>
      <TextInput 
        onChangeText={onChangeText}
        placeholder={placeholder}/>
    </View>
  )
}

export default Input