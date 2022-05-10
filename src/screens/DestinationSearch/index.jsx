import React, { useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'

const DestinationSearch = () => {
    const [fromOriginal, setFromOriginal] = useState(null) 
    const  [destinationPlace, setDestinationPlace] = useState(null)

    // useEffect(() => {
    //  console.warn('not yet')
    //   if (fromOriginal && destinationPlace ) {
    //     console.warn('redirect to result ')
    //   }
      
    // }, [fromOriginal, destinationPlace])
    

  return (
    
        <View style={styles.Container}>
          
            
         
          <GooglePlacesAutocomplete
          placeholder='From'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details})
            console.log(data, details);
          }}
         
          fetchDetails={true}
        
          query={{
            key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
            language: 'en',
          }}
        />  

        
        
      </View>
   

    
  )
}

export default DestinationSearch