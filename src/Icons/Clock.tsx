import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Clock = props => (
  <Svg
    viewBox="-1 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}>
    <Path fill={props.color} d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917M5.85 3.309a6.833 6.833 0 1 0 2.65-.534 6.8 6.8 0 0 0-2.65.534m5.958 4.678c-.105.113-.22.22-.33.33l-.756.757-1.59 1.59a1.5 1.5 0 0 1-.404.35.56.56 0 0 1-.778-.515c-.004-.431 0-.862 0-1.293V4.28a.554.554 0 0 1 .987-.36.86.86 0 0 1 .122.586V9.17q.155-.157.312-.313l1.223-1.223.387-.387a.65.65 0 0 1 .218-.153.554.554 0 0 1 .61.893z" />
  </Svg>
);
export default Clock;
