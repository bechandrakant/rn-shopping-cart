import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}> Lapikart </Text>
        <Image source={require('../images/logo.png')} style={styles.logo}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginTop: 26,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 5,
    backgroundColor: '#ccc',
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginRight: 20,
  },
  logoText: {
    marginTop: 20,
    flex: 1,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 24,
  }
})