import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPerson = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#999"
      fillRule="evenodd"
      d="M20 21s1.5 0 1.5-1.5-1.5-6-9-6-9 4.5-9 6S5 21 5 21zM5.008 19.584v-.003zm.025-.084h14.934l.021-.003.012-.003c-.002-.369-.231-1.479-1.248-2.496C17.774 16.02 15.934 15 12.5 15c-3.435 0-5.274 1.02-6.252 1.998C5.231 18.015 5.003 19.125 5 19.494zm14.961.084v-.003zM12.5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m4.5-3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPerson;
