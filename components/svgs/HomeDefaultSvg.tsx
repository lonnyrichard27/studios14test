import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface HomeDefaultProps {
  color?: string;
}

const HomeDefault: React.FC<HomeDefaultProps> = ({ color = 'white' }) => (
  <Svg width={27} height={24} viewBox="0 0 27 24" fill="none">
    <Path
      d="M1.78125 11.5938L13.5 1.28125L25.2188 11.5938M5.53125 8.78125V22.8438H21.4688V8.78125H5.53125Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeDefault;
