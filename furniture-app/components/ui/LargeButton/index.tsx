import { StyleSheet, Pressable, Text, Image } from "react-native";

import Typography from '@/constants/typography'
import Colors from "@/constants/colors";
import { ReactNode } from "react";

const styles = StyleSheet.create({
  button: {
    height: 60,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  text: {
    color: Colors.white,
  },
  google: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  }
})

const variantStyles = {
  primary: {
    backgroundColor: Colors.blue,
    textColor: Colors.white,
    maxWidth: 303,
    minWidth: 203,
    content: null
  },
  secondary: {
    backgroundColor: Colors.white,
    textColor: Colors.black,
    maxWidth: 303,
    minWidth: 203,
    content: null
  },
  google: {
    backgroundColor: Colors.darkBlue,
    textColor: Colors.white,
    maxWidth: 142,
    minWidth: 142,
    content: <Image source={require('@/assets/images/google.png')} style={[styles.google]}/>
  },
};
type VariantName = keyof typeof variantStyles;

function LargeButton({style, onPress, children}: {style: VariantName, onPress: () => void, children?: ReactNode}) {

  const { backgroundColor, textColor, maxWidth, minWidth } = variantStyles[style];
  const content = variantStyles[style].content;

  return (
    <Pressable style={[styles.button, {backgroundColor}, {maxWidth: maxWidth}, {minWidth: minWidth}]} onPress={onPress}>
      <Text style={[styles.text, Typography.button, { color: textColor }]}>{content ? content : children}</Text>
    </Pressable>
  )
}

export default LargeButton