import { View, Text,Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import UberTypeRow from '../UberTypeRow'
import dataTypes from '../../assets/data/types'

const UberTypes = () => {
  const handeleSubmit=()=>{
    console.warn('submited')
  }
  return (
    <View>
    {
      dataTypes.map((type)=>(
        <UberTypeRow type={type} key={type.id}/>
      ))
    }
    <Pressable onPress={handeleSubmit} style={{
      alignItems: 'center',
      backgroundColor:'black',
      margin:10,
      padding:10
    }}>
      <Text style={{
        fontWeight: 'bold',
        color: 'white'
      
      }}> Submit</Text>
    </Pressable>
      
    </View>
  )
}

export default UberTypes