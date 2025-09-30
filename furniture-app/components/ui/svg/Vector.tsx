import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVector = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 29 29"
    {...props}
  >
    <Path
      fill="#fff"
      d="M14.167 11.333V17h8.015c-1.17 3.298-4.32 5.667-8.015 5.667-4.687 0-8.5-3.814-8.5-8.5 0-4.687 3.813-8.5 8.5-8.5 2.031 0 3.986.728 5.505 2.051l3.723-4.273A14.04 14.04 0 0 0 14.167 0C6.355 0 0 6.355 0 14.167s6.355 14.166 14.167 14.166 14.166-6.355 14.166-14.166v-2.834z"
    />
  </Svg>
);
export default SvgVector;
