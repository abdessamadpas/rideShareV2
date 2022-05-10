import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    inputBox:{
        backgroundColor:'#e6e6e6',
        margin:10,
        padding:7,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        

    },
    inputText:{
        fontSize:18,
        fontWeight:'600',
        color:'#6e6e6e',
        

    },
    timeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: 85,
        padding:8,
        backgroundColor:'#fff',
        borderRadius:50


    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15 ,
       

    },
    text:{
        paddingRight:7
    },
    iconContainer:{
        backgroundColor:'#e6e6e6',
        borderRadius:25,
        padding:10
    },
    distinationText:{
        marginLeft: 10,
        fontWeight:'600',
        fontSize:15
    },
    iconContainerHome: {
        backgroundColor:'#86a1fa',
        borderRadius: 25,
        padding: 10
    }
})

export default styles;