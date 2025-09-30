import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSearch = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#4F63AC"
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.132-7 7 3.132 7 7 7m8.485.071 2.829 2.828-1.415 1.415-2.828-2.829z"
    />
  </Svg>
);
export default SvgSearch;
