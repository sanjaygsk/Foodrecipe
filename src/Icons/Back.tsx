import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
    color?: string;
    height?: number;
    width?: number;
    strokeWidth?: number;
};  

const Back = (props: Props) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
      fill={props.color}
    />
  </Svg>
);

export default Back;
