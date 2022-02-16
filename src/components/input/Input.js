import React from "react";
import { TextInput, View } from "react-native";

const Input = ({value, onChangeText, placeholder}) => {
  return(
    <View>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}/>
    </View>
  )
}

export default Input