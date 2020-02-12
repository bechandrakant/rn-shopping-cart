import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'

interface ImageSource {
  imgSrc: string
}

export default class CustomImage extends Component<{imgSrc: string}, ImageSource> {
  render() {
    return (
      <ImageBackground
        source={this.props.imgSrc}
        style={styles.img} >
          <Text style={styles.text}>Add To Cart</Text>
          </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    elevation: 1,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 'bold',
    marginTop: 172,
    height: 28,
    backgroundColor: 'rgba(255, 80, 80, 0.6)',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})