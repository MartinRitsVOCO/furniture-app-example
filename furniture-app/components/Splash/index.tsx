import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

import Typography from '@/constants/typography'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={require('@/assets/images/splash_image.jpg')} />
        <Text style={[styles.text, Typography.title]}>You'll Find</Text>
        <Text style={[styles.text, Typography.titleAlt]}>All you need</Text>
        <Text style={[styles.text, Typography.title]}>Here!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
})