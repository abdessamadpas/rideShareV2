import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import  Entypo from'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'


const HoemSearch = () => {
  return (
    <View>
      
        {/*Input Box*/}
        <View style={styles.inputBox}>
          <Text style={styles.inputText}> Where To!</Text>
        
            <View style={styles.timeContainer}>
              <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
              <Text style={styles.text}> Now</Text>
              <MaterialIcons name={'arrow-drop-down'} size={16} color={'#535353'}/>
            </View>
        </View>
        {/*previews detination*/}
        
        <View style={[styles.row, {borderBottomWidth:1 , borderColor:'#cecece'} ]}>
          <View style={styles.iconContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
          </View>
          <Text style={styles.distinationText}> Spin Nightclub</Text>
        </View>
        {/*home detination */}

        <View style={styles.row}>
          <View style={styles.iconContainerHome}>
            <Entypo name={'home'} size={16} color={'#535353'}/>
          </View>
          <Text style={styles.distinationText}> Home</Text>
        </View>
        
    </View>
  )
} 

export default HoemSearch