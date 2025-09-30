import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 19 18"
    {...props}
  >
    <Path
      fill="#4F63AC"
      fillRule="evenodd"
      d="M3.828 8.293h14.586v2H3.828l6.293 6.293L8.707 18 0 9.293 8.707.586 10.121 2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowLeft;
