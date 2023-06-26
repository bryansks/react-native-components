import { Image, ImageSourcePropType } from 'react-native';
import React from 'react';

const IconBase = ({
  icon,
  imgWidth,
  imgHeight,
  colorIcon,
  marginVertical,
}: {
  icon: ImageSourcePropType;
  imgWidth: number;
  imgHeight: number;
  colorIcon: string | undefined;
  marginVertical?: number;
}) => {
  return (
    <Image
      testID="icon-base"
      style={{
        width: imgWidth,
        height: imgHeight,
        tintColor: colorIcon || undefined,
        marginVertical: marginVertical,
      }}
      source={icon}
    />
  );
};

export default IconBase;
