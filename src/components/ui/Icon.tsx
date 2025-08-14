
import {Fontisto } from '@react-native-vector-icons/fontisto';
import { IconProps } from 'types/uitypes';
const Icon = ({ name, size = 24, color = 'black' } : IconProps) => {
  return (
    <Fontisto name={name} size={size} color={color} />
  );
};

export default Icon;