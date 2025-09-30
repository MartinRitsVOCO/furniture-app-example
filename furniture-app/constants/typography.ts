import { StyleSheet } from "react-native";
const BASE_FONT_FAMILY = 'DM-Sans';
const ITALIC_FONT_FAMILY = 'DM-Sans-Italic';

import Colors from "@/constants/colors";

const Typography = StyleSheet.create({
  title: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 40,
    fontWeight: '700',
    color: Colors.black,
  },
  titleAlt: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 40,
    fontWeight: '700',
    color: Colors.orange,
    textDecorationLine: 'underline',
  },
  pageHeader: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 26,
    fontWeight: '700',
    color: Colors.blue,
  },
  textHeader: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 24,
    fontWeight: '500',
  },
  button: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
  },
  smallButton: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '600',
  },
  topBar: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '400',
  },
  formLabel: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.blue,
  },
  textInput: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.grey,
  },
  hint: {
    fontFamily: ITALIC_FONT_FAMILY,
    fontSize: 12,
    fontWeight: '300',
  },
  bold: {
    fontWeight: '700'
  }
});

export default Typography;