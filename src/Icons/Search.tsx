import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  size: number;
  strokeWidth: number;
};

const Search = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b6c6e"
    strokeWidth={props.strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.35-4.35" />
  </Svg>
);
export default Search;
