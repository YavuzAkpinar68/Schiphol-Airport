import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    paddingLeft:10,
    paddingTop:20,
    paddingBottom:20,
    margin:10,
    backgroundColor:"olive",
    flexDirection:"row",
    borderBottomWidth:2,
    borderTopWidth:2
  },
  text:{
    fontSize:15,
    color:"white"
  },
  flightNameView:{
    justifyContent:"space-evenly",
    borderRightWidth:1,
    paddingRight:10,
    alignItems:"center",
    borderBottomWidth:1
  },
  flightDetailView:{
    paddingLeft:10,
    borderTopWidth:1
  }
})

export default styles