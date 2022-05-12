import { View, Text } from 'react-native'
import React from 'react'
import RouterMap from '../../components/RouterMap';
import UberTypes from '../../components/UberTypes'
import { Dimensions } from 'react-native';

const SearchResult = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height -280 }}>
        <RouterMap/>
      </View>
      <View style={{height:280}}>
      <UberTypes/>
      </View>      
    </View>
  )
}



export default SearchResult