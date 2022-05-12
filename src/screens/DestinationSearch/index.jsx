import React, { useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'

const DestinationSearch = () => {


  //! stile just pass data for this component From the React Navigation
  //* I finish fetshing data from the API 


    const [fromOriginal, setFromOriginal] = useState(null) 
    const  [destinationPlace, setDestinationPlace] = useState(null)

     useEffect(() => {
      console.warn('not yet')
       if (fromOriginal && destinationPlace ) {
          console.warn(fromOriginal, destinationPlace)
          console.log(fromOriginal, destinationPlace)
       }
      
     }, [fromOriginal, destinationPlace])
    

  return (
    
        <View style={styles.Container}>
          
            
         
          <GooglePlacesAutocomplete
          placeholder='From'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace(details.geometry.location)
            console.log(details.geometry.location);
          }}
         
          fetchDetails={true}
        
          query={{
            key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
            language: 'en',
          }}
        />  

        <GooglePlacesAutocomplete
        placeholder='From'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setFromOriginal(details.geometry.location)
          console.log(details.geometry.location);
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