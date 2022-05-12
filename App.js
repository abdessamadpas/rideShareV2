import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index'
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResult from './src/screens/SearchResult';

export default function App() {
  return (
    <View >
    <StatusBar style="auto" />
    <SearchResult />
    </View>
  );
}

