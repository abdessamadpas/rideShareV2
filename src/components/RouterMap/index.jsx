import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React from 'react'
import styles from './styles'

const RouterMap = () => {
    const GOOGLE_MAPS_APIKEY ='AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4'
    const origin={
        latitude: 28.450627,
        longitude: -16.263045,
    }
    
    const destination={
      latitude: 28.454812,
      longitude: -16.258658,
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
    
    
      <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeColor='yellow'
      strokeWidth={5}
      optimizeWaypoints={true}

      />  
         <Marker
          
          coordinate={origin}
        
        
        />
        <Marker
        
         coordinate={destination}
      
        />  
  </MapView>      
    </View>
    
  )
}

export default RouterMap;


