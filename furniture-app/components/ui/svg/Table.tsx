import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTable = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <Path
      fill="#909090"
      d="M27.563 3.938H.438A.44.44 0 0 0 0 4.375V7c0 .242.196.438.438.438H1.75v16.187c0 .242.196.438.438.438h1.75a.44.44 0 0 0 .437-.438V7.438h19.25v16.187c0 .242.196.438.438.438h1.75a.44.44 0 0 0 .437-.438V7.438h1.313A.44.44 0 0 0 28 7V4.375a.44.44 0 0 0-.437-.437m-.438 2.625h-1.312a.44.44 0 0 0-.438.437v16.188H24.5V7a.44.44 0 0 0-.437-.437H3.938A.44.44 0 0 0 3.5 7v16.188h-.875V7a.44.44 0 0 0-.437-.437H.875v-1.75h26.25z"
    />
  </Svg>
);
export default SvgTable;
