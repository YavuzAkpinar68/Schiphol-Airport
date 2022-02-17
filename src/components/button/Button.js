import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./ButtonStyles"

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button