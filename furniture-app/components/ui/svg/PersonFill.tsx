import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPersonFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#4F63AC"
      fillRule="evenodd"
      d="M5 21s-1.5 0-1.5-1.5 1.5-6 9-6 9 4.5 9 6S20 21 20 21zm7.5-9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPersonFill;
