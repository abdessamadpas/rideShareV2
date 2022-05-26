import { View, Text, StyleSheet, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HoemSearch from '../../components/HomeSearch'
const HomeScreen = () => {
  return (
    <View >
    <View style={{height: Dimensions.get('window').height -318 }}>

        <HomeMap/>
        </View>
    <View style={{height: 318}}>
       {/** covid message */}
        <ScrollView>
        <CovidMessage/>
       {/* bottom component*/}
       <HoemSearch/>
        </ScrollView>
       
    </View>
       
    
    </View>
  )
}
 
export default HomeScreen