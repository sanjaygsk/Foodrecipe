import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  height?: number;
  width?: number;
};

const Heart = (props: Props) => (
  <Svg
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <Path
      d="M4.036 1a4.036 4.036 0 0 0-2.854 6.89l5.964 5.964a.5.5 0 0 0 .708 0l5.964-5.965a4.036 4.036 0 0 0-5.707-5.707l-.611.61-.61-.61A4.04 4.04 0 0 0 4.035 1"
      fill={props.color}
    />
  </Svg>
);

export default Heart;
