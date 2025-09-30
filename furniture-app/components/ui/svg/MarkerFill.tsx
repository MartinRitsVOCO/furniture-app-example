import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMarkerFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#4F63AC"
      stroke="#4F63AC"
      strokeWidth={1.5}
      d="M5.882 2.75h12.303c.63 0 1.065.483 1.065.947v17.167c0 .24-.068.324-.087.344-.022.023-.057.042-.116.042-.064 0-.186-.025-.381-.182h-.001l-5.486-4.407a1.83 1.83 0 0 0-1.138-.38c-.395 0-.814.118-1.139.38L5.4 21.067l-.002.002c-.181.147-.325.181-.4.181l-.056-.006a.17.17 0 0 1-.101-.062.5.5 0 0 1-.091-.318V3.697c0-.43.465-.947 1.132-.947Z"
    />
  </Svg>
);
export default SvgMarkerFill;
