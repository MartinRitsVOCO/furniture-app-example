import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEdit = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="gray"
      fillRule="evenodd"
      d="M4.293 17.686a1 1 0 0 1-.29-.799l.38-4.17c.042-.457.244-.888.57-1.213l8.996-8.996c.702-.705 1.975-.67 2.716.068l2.738 2.738v.002c.766.766.797 1.984.069 2.714l-8.997 8.997a1.98 1.98 0 0 1-1.214.569l-4.17.378-.091.003c-.263 0-.518-.104-.707-.291m11.726-9.03-2.695-2.695 1.948-1.949 2.694 2.695zm-6.94 6.946-2.976.271.264-2.955L11.984 7.3l2.696 2.697zM19 21.978c.55 0 1-.45 1-1 0-.549-.45-1-1-1H5c-.548 0-1 .451-1 1 0 .55.452 1 1 1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEdit;
