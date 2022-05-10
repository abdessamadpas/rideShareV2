import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        

    },
    image:{
        width: 60,
        height: 50,
        resizeMode: 'contain'
    },
    middleContainer: {
        flex:1,
        marginLeft: 12
           
    },
    type: {
        flexDirection: 'row',
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:4
        
    },
    rightContainer: {
        justifyContent: 'flex-end',
        flexDirection:'row'

    },
    price: {

    }
})
export default styles;
