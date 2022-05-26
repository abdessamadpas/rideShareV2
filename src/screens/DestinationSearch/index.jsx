import React, { useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {


  //! stile just pass data for this component From the React Navigation
  //* I finish fetshing data from the API 


    const [fromOriginal, setFromOriginal] = useState(null) 
    const  [destinationPlace, setDestinationPlace] = useState(null)

     useEffect(() => {
      console.warn('not yet')
       if (fromOriginal && destinationPlace ) {
            console.warn(fromOriginal, destinationPlace)
        //  console.log(fromOriginal, destinationPlace)
       }
      
     }, [fromOriginal, destinationPlace])
    

  return (
    <SafeAreaView>
        <View style={styles.Container}>
          <GooglePlacesAutocomplete
            placeholder='From'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setDestinationPlace(data,details)
          //    console.log(data);
            }}
            suppressDefaultStyles
            enablePoweredByContainer={false}
            styles={{
              textInput:styles.textInput,
              container: {
                position : 'absolute' ,
                top : 10,
                left: 10,
                right: 10,
                
                
              },
              listView: {
                position:'absolute',
                top:120,
              },
              separator:{
                backgroundColor:'#b4b4b4',
                height:1,
                marginHorizontal : 50,
                marginVertical: 5
              },
              row: {
                backgroundColor: '#FFFFFF',
                padding: 10,
                height: 50,
                flexDirection: 'row',
              },
            }}
            fetchDetails={true}
          
            query={{
              key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
              language: 'en',
            }}
            renderRow={(data)=><PlaceRow data={data}/ >}
        />  

        <GooglePlacesAutocomplete
        placeholder='Where To'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setFromOriginal(details.geometry.location)
          console.log(details.geometry.location);
        }}
        suppressDefaultStyles
        enablePoweredByContainer={false}
        styles={{
          textInput:styles.textInput,
          container: {
            position : 'absolute' ,
            top : 80,
            left: 10,
            right: 10,
            
            
          },
          listView: {
            position:'absolute',
            top:50,
          },
          separator:{
            backgroundColor:'grey',
            height:1,
            marginHorizontal : 50,
            marginVertical: 5
          },
          row: {
            backgroundColor: '#FFFFFF',
            padding: 5,
            height: 50,
            flexDirection: 'row',
          },
        }}
        fetchDetails={true}
      
        query={{
          key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
          language: 'en',
        }}
        renderRow={(data)=><PlaceRow data={data}/ >}
      />  
          
      <View  style={styles.cercle}/>
      <View style={styles.line}/>
      <View style={styles.square}/>
      </View>
    </SafeAreaView>
  )
}

export default DestinationSearch