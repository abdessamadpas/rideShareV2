import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
     Container: {
        padding:10,
        height:'100%',
      //  flex:1

        },
     textInput: {
         padding:10,
         backgroundColor: '#eee',
         marginVertical:5,
         marginLeft:20
     },
     row: {
        
      height:50,
      flexDirection: 'row',
      alignItems:"center",
      
       
       
   },
     iconContainer: {
      backgroundColor:'beige',
      padding: 5,
      borderRadius:50,
      marginRight:10,
   


     },
     locationContainer: {

     },
     cercle: {
        height: 8,
        width:8,
        top:35,
        backgroundColor: 'black',
        left:10,
        position: 'absolute',
        borderRadius: 50

     },
     line: {
      width: 1,
      height:42,
      position:'absolute',
      left:14,
      top:52,
      backgroundColor: 'grey'
     },
     square: {
      height: 8,
      width: 8,
      top:105,
      backgroundColor: 'black',
      left:10,
      position: 'absolute',
     }
 })
 export default styles;