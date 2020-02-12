import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
      <Image
        style={styles.hero}
        source={require('../images/img1.jpeg')} />
    )
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: '100%',
  },
})