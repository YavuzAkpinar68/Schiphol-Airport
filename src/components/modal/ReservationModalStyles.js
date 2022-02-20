import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    backgroundColor:"wheat",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:30,
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
    alignItems:"center",
    borderRightWidth:1,
  },
  title:{
    color:"silver",
    textAlign:"center",
    fontSize:25
  },
  innerContainer:{
    flexDirection:"row",
    justifyContent:"center",
    flex:1
  }
})

export default styles