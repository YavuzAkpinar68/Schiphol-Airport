import React, { useContext, useState } from "react";
import { Modal, View, Text, FlatList } from "react-native";
import { ReservationContext } from "../../context/ReservationProvider";
import Button from "../button/Button";
import ModalCard from "../cards/modalCard/ModalCard";
import styles from "./ReservationModalStyles";

const ReservationModal = ({ onClose, addReservation, sendData }) => {
  const [selected, setSelected] = useState([])
  const [selectedSeat, setSelectedSeat] = useState("")
  const [selectedSeatNumber, setSelectedSeatNumber] = useState()
  const number = []
  const seat = ["A", "B", "C", "D", "E", "F"]
  for (let i = 1; i <= 50; i++) {
    number.push(i)
  }

  const handleRender = ({ item }) => (
    <ModalCard selected={selected} item={item} onPress={handlePress} />
  )

  const handlePress = (item) => {
    const isInFavorites = selected.findIndex(f => f === item) !== -1;

    if (isInFavorites) {
      let index = selected.findIndex(ind => ind == item)
      setSelected([selected.splice(index, 1), ...selected]);

      console.log('newselected', selected)
    } else {
      setSelected([item, ...selected])
      console.log('selected', selected)
      console.log(item)
      if (typeof item == "number") {
        setSelectedSeatNumber(item)
      } else {
        setSelectedSeat(item)
      }
    }
  }

  return (
    <Modal
      style={styles.modal}
      onBackButtonClose={onClose}
      onRequestClose={onClose}
      transparent={true}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Chosee your seat</Text>
          <Button
            theme="reservationButton"
            title="Reserve"
            onPress={(flight) => addReservation(sendData(selectedSeat, selectedSeatNumber), flight)}
          />
          <View style={styles.innerContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              data={number}
              renderItem={handleRender}
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              data={seat}
              renderItem={handleRender}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ReservationModal