import { Text, StyleSheet, View, Image } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

import Typography from '@/constants/typography'
import LargeButton from '../ui/LargeButton'

const Splash: React.FC = () => {
  const router = useRouter()

  const toSignUp = () => {
    router.push('/SignUp')
  }

  const toLogIn = () => {
    router.push('/LogIn')
  }

  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('@/assets/images/splash_image.jpg')} />
      <Text style={[styles.text, Typography.title]}>You'll Find</Text>
      <Text style={[styles.text, Typography.titleAlt]}>All you need</Text>
      <Text style={[styles.text, Typography.title]}>Here!</Text>
      <View style={styles.buttons}>
        <LargeButton style='primary' onPress={toSignUp}>Sign Up</LargeButton>
        <LargeButton style='secondary' onPress={toLogIn}>Sign In</LargeButton>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 357,
    height: 209,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
  },
  buttons: {
    marginTop: 50,
  },
})