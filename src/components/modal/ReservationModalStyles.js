import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:30,
    flexDirection:"row",
    justifyContent:"center"
  },
  modal:{
    marginTop:10,
  },
  outerContainer:{
    flex:1,
    backgroundColor:"#000000b0",
    justifyContent:"flex-end"
  },
  contentContainer:{
    alignItems:"center"
  }
})

export default styles