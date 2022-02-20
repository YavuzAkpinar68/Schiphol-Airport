import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { RNCamera } from 'react-native-camera';

import Button from "../../components/button/Button";
import styles from "./QrScanPageStyles";

const QrScannerPage = () => {
  const [qr, setQr] = useState()

  const handleQr = (barcode) => {
    setQr(barcode.data)
  }

  return (
    <SafeAreaView style={styles.container}>
      {
        qr ?
          <ImageBackground
            source={{ uri: 'https://w.wallhaven.cc/full/95/wallhaven-9569gw.jpg' }}
            style={styles.container}>
            <View style={styles.infoView}>
              <Text style={styles.title} >Reservation Details</Text>
              <Text style={styles.text}>{qr}</Text>
              <Button theme="reservationButton" title="Scan another code" onPress={() => setQr()}></Button>
            </View>
          </ImageBackground>
          :
          <RNCamera ref={ref => { let a = ref }}
            style={styles.camera}
            captureAudio={false}
            onBarCodeRead={handleQr}>
          </RNCamera>
      }
    </SafeAreaView>
  )
}

export default QrScannerPage