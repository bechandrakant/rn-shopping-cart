import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header'
import HeroImage from './src/components/HeroImage'
import BrowseProducts from './src/components/BrowseProducts';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <HeroImage />
      <Text style={styles.text}> Browse Products </Text>
      <BrowseProducts />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfc',
  },
  text: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
