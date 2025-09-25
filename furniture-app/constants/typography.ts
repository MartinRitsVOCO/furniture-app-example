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
  },
  textHeader: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 24,
    fontWeight: '500',
  },
  button: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 14,
    fontWeight: '400',
  },
  hint: {
    fontFamily: ITALIC_FONT_FAMILY,
    fontSize: 12,
    fontWeight: '300',
  },
});

export default Typography;