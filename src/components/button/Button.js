import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./ButtonStyles"

const Button = ({ title, onPress, theme='seacrhButton' }) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={() => onPress(title)}>
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button