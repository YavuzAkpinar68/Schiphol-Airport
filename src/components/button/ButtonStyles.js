import { StyleSheet } from "react-native";

const styles = {
  seacrhButton: StyleSheet.create({
    container: {
      justifyContent: "center",
      margin: 5,
      borderRadius: 20,
      flex: 1,
      alignItems: "center"
    }
  }),
  directionButton: StyleSheet.create({
    container:{
      margin:10,
      padding:10,
      borderRadius:360,
      flex:1,
      alignItems:"center",
      borderWidth:2,
      backgroundColor:"#000000a0"
    },
  }),
  reservationButton: StyleSheet.create({
    container:{
      margin:10,
      padding:10,
      borderRadius:360,
      alignItems:"center",
      borderWidth:2,
      justifyContent:"center",
      backgroundColor:"olive"
    },
    title:{
      color:"silver",
      fontSize:18,
      fontWeight:"900"
    }
  })

}

export default styles