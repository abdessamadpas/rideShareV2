import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import EvilIcons from  "react-native-vector-icons/EvilIcons"

const PlaceRow = ({data}) => {
    console.log(data);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <EvilIcons  name='location' size={20} color ={"yellow"}/> 
      </View>
      <Text style={styles.locationContainer}> {data.description}</Text>
    </View>
  )
}

export default PlaceRow