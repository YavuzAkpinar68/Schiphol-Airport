import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./InputStyles";

const Input = ({title, onChangeText, placeholder}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput} 
        onChangeText={onChangeText}
        placeholder={placeholder}/>
    </View>
  )
}

export default Input