import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  innerContainer:{
    backgroundColor:"#000000a0",
    flex:3,
  },
  bottomContainer:{
    flex:1,
    justifyContent:"flex-end",
    flexDirection:"column-reverse"
  },
  text:{
    color:"white",
    fontSize:18
  },
  buttonContainer:{
    flex:1,
    justifyContent:"center"
  }
})

export default styles