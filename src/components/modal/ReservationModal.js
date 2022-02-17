import React, { useState } from "react";
import { Modal, View, Text, FlatList } from "react-native";
import styles from "./ReservationModalStyles";

const ReservationModal = ({ onClose }) => {
  const number = []
  for (var i=1; i<=50; i++) {
    number.push(i)
  }
  console.log(number)


  return (
    <Modal
      style={styles.modal}
      onBackButtonClose={onClose}
      onRequestClose={onClose}
      transparent={true}>
      <View style={styles.outerContainer}>
        <Text>Modal</Text>
        <View style={styles.container}>
          <FlatList data={number} renderItem={({item}) => <Text>{item}</Text>}/>
        </View>
      </View>
    </Modal>
  )
}

export default ReservationModal