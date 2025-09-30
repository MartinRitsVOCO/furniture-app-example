import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLogout = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <Path
      stroke="#4F63AC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.513 5.158V4.38a3.07 3.07 0 0 0-3.07-3.07H4.38a3.07 3.07 0 0 0-3.07 3.07v9.275a3.07 3.07 0 0 0 3.07 3.071h4.07c1.692 0 3.063-1.37 3.063-3.061v-.786M17.175 9.018H7.14M14.734 6.589l2.44 2.429-2.44 2.43"
    />
  </Svg>
);
export default SvgLogout;
