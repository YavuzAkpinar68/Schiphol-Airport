import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    padding:5,
    margin:5,
    width:Dimensions.get('screen').width / 6,
    alignItems:"center",
    borderRadius:60
  },
  text:{
    fontSize:30
  }
})



export default styles