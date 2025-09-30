import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDismiss = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#4F63AC"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-.256-11.088 2.533-2.533a.77.77 0 1 1 1.087 1.088L12.831 12l2.534 2.533a.77.77 0 0 1-1.088 1.088l-2.533-2.533L9.21 15.62a.77.77 0 1 1-1.088-1.088L10.656 12 8.123 9.467A.77.77 0 0 1 9.21 8.379zM3.538 12a8.461 8.461 0 1 0 16.923 0 8.461 8.461 0 0 0-16.923 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDismiss;
