import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdd = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#DADADA" />
    <Path
      fill="#fff"
      d="M5.968 14.808V.792h2.688v14.016ZM.144 9.08V6.552H14.48V9.08Z"
      transform="translate(7.688 7.2)"
    />
  </Svg>
);
export default SvgAdd;
