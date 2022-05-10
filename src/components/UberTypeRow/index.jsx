import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const UberTypeRow = ({type}) => {

    const carsType =()=>{
        if(type.type ==='UberX'){
          return require('../../assets/images/UberX.jpeg')
        }
        if(type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg')
    };

  return (
    <View style={styles.container}>
     <Image style={styles.image} source={carsType()}/>
     
     <View style={styles.middleContainer}>
       
        <Text  style={styles.type}>
            {type.type}
            <Ionicons name='person' size={15} />
        </Text>    
        
        <Text style={styles.time}> {type.duration} PM drop off</Text>
     </View>
    
     <View style={styles.rightContainer}>
        <Ionicons name='pricetag' size={15} color={'green'}/>
        <Text style={styles.price}> {type.price} $ </Text>
         
     </View>
    </View>
  )
}

export default UberTypeRow