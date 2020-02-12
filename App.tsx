import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import HeroImage from './src/components/HeroImage'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <HeroImage />
      <View style={styles.x}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    flex: 1,
  }
});
