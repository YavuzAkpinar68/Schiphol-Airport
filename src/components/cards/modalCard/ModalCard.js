import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./ModalCardStyles";

const ModalCard = ({ item, onPress, selected = [] }) => {
  const selectedColor = selected.includes(item) ? "red" : "silver"
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={[styles.container, { backgroundColor: selectedColor }]}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )
}

export default ModalCard