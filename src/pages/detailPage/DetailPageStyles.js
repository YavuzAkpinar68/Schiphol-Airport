import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  innerContainer:{
    backgroundColor:"#000000a0",
    flex:3,
    alignItems:"center"
  },
  bottomContainer:{
    flex:1,
    justifyContent:"flex-end",
    flexDirection:"column-reverse"
  },
  text:{
    color:"white",
    fontSize:17,
    borderBottomWidth:1,
    borderColor:"white"
  },
  buttonContainer:{
    flex:1,
    justifyContent:"center"
  },
  flightDetailView:{
    flex:1.5
  },
  qrView:{
    flex:1,
    alignItems:"center",
  },

  qrImage:{
    height:Dimensions.get('screen').height /5, 
    width: Dimensions.get('screen').width / 2.5
  },
  text1:{
    fontSize:25,
    fontWeight:"800",
    borderBottomWidth:2,
    color:"white",
    borderColor:"white"
  }
})

export default styles