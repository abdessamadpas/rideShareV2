import { View, Text, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import React from 'react'
import styles from './styles'
import data from '../../assets/data/cars'

const HomeMap = () => {
  const image=(type)=>{
    if(type === 'Comfort'){
      return require('../../assets/images/top-Comfort.png')
    } 
    if(type === 'lghla'){
      return require('../../assets/images/top-UberXL.png')
    }
    return require('../../assets/images/top-UberX.png')
  }
  return (
    <View style={styles.containerMap}>
    <MapView  style={styles.map}
    provider={PROVIDER_GOOGLE}
       initialRegion={{
       latitude: 28.450627,
       longitude: -16.263045,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }} 
    >
   
   {
     data.map((car)=>(
      <Marker
      key={car.id}
      coordinate={{  latitude: car.latitude , longitude : car.longitude }}>
       <Image style={{width:100,
          height:100,
          resizeMode: 'contain',
          transform:[{
            rotate:`${car.heading}deg`
          }
          ]
        }}
       source={image(car.type)}  />
      </Marker>
     ))
   }
   
  

      
      
  </MapView>
        
   
        
       
    </View>
    
  )
}

export default HomeMap


