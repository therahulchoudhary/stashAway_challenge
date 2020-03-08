import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex:1,
        width:'100%',
        // paddingHorizontal:20,
        alignSelf:'center',
        backgroundColor:'white'
    },
    basicText: {
        fontSize:18,
        textAlign:'justify',
        fontFamily:'DidactGothic-Regular'
    },
    filterButton: {
      position:'absolute',
      bottom:35,
      width:60,
      height:60,
      backgroundColor:'white',
      elevation:5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:60,
      right:35,
    },
    locationBar: {
        position:'absolute',
        backgroundColor:'white',
        top:-35,
        right:20,
        zIndex:9999,
        flexDirection:'row',
        alignItems:'center'
    }
});

export default styles;