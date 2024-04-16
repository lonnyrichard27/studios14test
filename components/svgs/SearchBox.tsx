import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface SearchDefaultProps {
  color?: string;
}

const SearchDefault: React.FC<SearchDefaultProps> = ({ color = '#fff' }) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
    <Path
      d="M24 23.5L18.7663 18.257L24 23.5ZM21.6667 11.25C21.6667 13.88 20.6219 16.4024 18.7621 18.2621C16.9024 20.1219 14.3801 21.1666 11.75 21.1666C9.11994 21.1666 6.5976 20.1219 4.73786 18.2621C2.87812 16.4024 1.83334 13.88 1.83334 11.25C1.83334 8.61992 2.87812 6.09757 4.73786 4.23784C6.5976 2.3781 9.11994 1.33331 11.75 1.33331C14.3801 1.33331 16.9024 2.3781 18.7621 4.23784C20.6219 6.09757 21.6667 8.61992 21.6667 11.25V11.25Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SearchDefault;
