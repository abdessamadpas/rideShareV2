import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>corona msg</Text>
      <Text style={styles.text}>Student Computer and Network Engineering ,Looking for internship (PFA).</Text>
      <Text style={styles.learnMore}> learn more</Text>
    </View>
  )
}

export default CovidMessage