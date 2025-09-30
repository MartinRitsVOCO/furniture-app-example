import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <G clipPath="url(#star_svg__a)">
      <Path
        fill="#fff"
        d="M19.982 7.725a.36.36 0 0 0-.289-.244l-6.476-.941L10.321.672a.357.357 0 0 0-.642 0L6.783 6.54l-6.476.941a.359.359 0 0 0-.199.61l4.687 4.569-1.107 6.45a.359.359 0 0 0 .52.377L10 16.442l5.793 3.045a.36.36 0 0 0 .519-.377l-1.106-6.45 4.686-4.568a.36.36 0 0 0 .09-.367"
      />
    </G>
    <Defs>
      <ClipPath id="star_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgStar;
