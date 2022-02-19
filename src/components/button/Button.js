import React from "react"
import { Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import styles from "./ButtonStyles"

const Button = ({ title, onPress, theme = 'seacrhButton', iconName, iconSize }) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={() => onPress(title)}>
      {iconName ?
        <Icon name={iconName} size={iconSize} />
        : <Text style={styles[theme].title}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

export default Button