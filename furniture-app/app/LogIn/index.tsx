import { View, StyleSheet, Text, Pressable, Image, TextInput } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import Typography from '@/constants/typography';
import Colors from '@/constants/colors';
import LargeButton from '@/components/ui/LargeButton';

export default function LogIn() {
  const [consent, setConsent] = useState(false)

  const router = useRouter();
  const goBack = () => {
    try {
      router.back();
    } catch {
      router.push("/")
    }
  };
  const goSignUp = () => {
    router.push("/SignUp");
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={goBack}>
        <Image style={[styles.arrow]} source={require('@/assets/images/arrow-left.png')}/>
        <Text style={[Typography.pageHeader]}>Sign In</Text>
      </Pressable>
      <View style={[styles.form]}>
        <View style={[styles.formElement]}>
          <Text style={[Typography.formLabel]}>E-mail</Text>
          <TextInput style={[styles.textInput, Typography.textInput]} placeholder='example@gmail.com' placeholderTextColor={Colors.lightGrey}></TextInput>
        </View>
        <View style={[styles.formElement]}>
          <Text style={[Typography.formLabel]}>Password</Text>
          <TextInput style={[styles.textInput, Typography.textInput]} placeholder='••••••••••••' placeholderTextColor={Colors.lightGrey} secureTextEntry></TextInput>
        </View>
        <View style={[styles.formElement]}>
          <LargeButton style='primary'>Sign In</LargeButton>
        </View>
        <View style={[styles.formElement, styles.formElementLine]}>
          <View style={[styles.line]}/>
          <Text style={[Typography.formLabel]}>Or sign in with</Text>
          <View style={[styles.line]}/>
        </View>
        <View style={[styles.formElement, styles.formElementCenter]}>
          <LargeButton style='google'>
            <Image source={require('@/assets/images/google.png')} style={[styles.google]}/>
          </LargeButton>
        </View>
        <Pressable style={[styles.formElement, styles.formElementCenter]} onPress={goSignUp}>
          <Text style={[Typography.formLabel]}>Already have an account? <Text style={[Typography.formLabel, Typography.bold]}>Sign In</Text></Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrow: {
    width: 19,
    height: 18,
    resizeMode: 'contain',
  },
  header: {
    marginTop: 50,
    marginLeft: 35,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  form: {
    marginTop: 50,
    flexDirection: 'column',
    paddingHorizontal: 35
  },
  formElement: {
    marginTop: 20
  },
  formElementLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  formElementCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  textInput: {
    height: 60,
    borderColor: Colors.grey,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 17
  },
  line: {
    flex: 1, 
    height: 1,
    backgroundColor: Colors.lightGrey
  },
  google: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  }
});