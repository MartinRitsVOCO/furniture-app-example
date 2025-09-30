import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHome = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#999"
      d="M22.5 12.667a.67.67 0 0 1-.473-.194L12.5 2.94l-9.527 9.533a.667.667 0 0 1-.94-.94l10-10a.667.667 0 0 1 .94 0l10 10a.666.666 0 0 1-.473 1.134"
    />
    <Path
      stroke="#999"
      strokeWidth={1.5}
      d="M19.75 13.483v7.85a.585.585 0 0 1-.583.584H15.25V15.25h-5.5v6.667H5.833a.584.584 0 0 1-.583-.584v-7.804l7.251-7.275z"
    />
  </Svg>
);
export default SvgHome;
