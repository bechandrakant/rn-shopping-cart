import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomImage from './CustomImage'

export default class BrowseProducts extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.left} >
            <CustomImage imgSrc={require('../images/img2.jpeg')} />
          </View>
          <View style={styles.right} >
            <CustomImage imgSrc={require('../images/img3.jpeg')} />
          </View>
          <View style={styles.full} >
            <CustomImage imgSrc={require('../images/img6.jpeg')} />
          </View>
          <View style={styles.right} >
            <CustomImage imgSrc={require('../images/img4.jpg')} />
          </View>
          <View style={styles.left} >
            <CustomImage imgSrc={require('../images/img5.jpeg')} />
          </View>
          <View style={styles.full} >
            <CustomImage imgSrc={require('../images/img6.jpeg')} />
          </View>
          <View style={styles.left} >
            <CustomImage imgSrc={require('../images/img2.jpeg')} />
          </View>
          <View style={styles.right} >
            <CustomImage imgSrc={require('../images/img3.jpeg')} />
          </View>
          <View style={styles.full} >
            <CustomImage imgSrc={require('../images/img6.jpeg')} />
          </View>
          <View style={styles.right} >
            <CustomImage imgSrc={require('../images/img4.jpg')} />
          </View>
          <View style={styles.left} >
            <CustomImage imgSrc={require('../images/img5.jpeg')} />
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  left: {
    flex: 2,
    padding: 5,
  },
  right: {
    flex: 3,
    padding: 5,
  },
  full: {
    padding: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

