import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface MenuIconProps {
  color?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ color = '#fff' }) => (
  <Svg width={25} height={20} viewBox="0 0 25 20" fill="none">
    <Path
      d="M23.75 1.25H1.25M1.25 10H23.75M23.75 18.75H1.25"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default MenuIcon;
