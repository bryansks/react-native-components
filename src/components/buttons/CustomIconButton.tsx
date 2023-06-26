import React from 'react';
import { TouchableOpacity } from 'react-native';

import type { ImageSourcePropType } from 'react-native';

import IconBase from '../ui/atoms/icons/IconBase';
import { Icons } from '../../types/enums/enums';

type CustomIconProps = {
  width: number;
  height: number;
  color?: string;
  onPress: () => void;
  icon?: ImageSourcePropType;
};
export const CustomIconButton: React.FC<CustomIconProps> = ({
  height,
  width,
  onPress,
  icon = Icons.Close,
  color = '#3D2973',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconBase
        icon={icon}
        imgHeight={height}
        imgWidth={width}
        colorIcon={color}
      />
    </TouchableOpacity>
  );
};
