import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#4F63AC"
      d="M22.5 12.667a.67.67 0 0 1-.473-.194L12.5 2.94l-9.527 9.533a.667.667 0 0 1-.94-.94l10-10a.667.667 0 0 1 .94 0l10 10a.666.666 0 0 1-.473 1.134"
    />
    <Path
      fill="#4F63AC"
      d="m12.5 5.193-8 8.027v8.113a1.333 1.333 0 0 0 1.333 1.334H10.5V16h4v6.667h4.667a1.333 1.333 0 0 0 1.333-1.334v-8.16z"
    />
  </Svg>
);
export default SvgHomeFill;
