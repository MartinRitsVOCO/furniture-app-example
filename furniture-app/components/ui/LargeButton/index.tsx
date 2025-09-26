import { StyleSheet, Pressable, Text } from "react-native";

import Typography from '@/constants/typography'
import Colors from "@/constants/colors";
import { ReactNode } from "react";

const variantStyles = {
  primary: {
    backgroundColor: Colors.blue,
    textColor: Colors.white,
    maxWidth: 303,
    minWidth: 203
  },
  secondary: {
    backgroundColor: Colors.white,
    textColor: Colors.black,
    maxWidth: 303,
    minWidth: 203
  },
  google: {
    backgroundColor: Colors.darkBlue,
    textColor: Colors.white,
    maxWidth: 142,
    minWidth: 142
  },
};

function LargeButton({style, onPress, children}: {style: 'primary' | 'secondary' | 'google', onPress?: () => void, children: ReactNode}) {

  const { backgroundColor, textColor, maxWidth, minWidth } = variantStyles[style];

  return (
    <Pressable style={[styles.button, {backgroundColor}, {maxWidth: maxWidth}, {minWidth: minWidth}]} onPress={onPress}>
      <Text style={[styles.text, Typography.button, { color: textColor }]}>{children}</Text>
    </Pressable>
  )
}

export default LargeButton

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
  }
})