import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import type { Colors } from '../../context/theme/themeReducer';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { useDimentions } from '../../hooks/Dimentions/useDimentions';

type BlockbuttonProps = {
  width?: number;
  title: string;
  onPress: () => void;
};
export const Blockbutton: React.FC<BlockbuttonProps> = ({
  title,
  onPress,
  width = 223,
}) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { styles } = FcStyle(colors, width);
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={'blockbutton-button'}
      style={styles.btnContainer}
    >
      <Text style={styles.title} testID={'blockbutton-title'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const FcStyle = (colors: Colors, width: number) => {
  const { moderateScale, verticalScale, horizontalScale } = useDimentions();
  const styles = StyleSheet.create({
    btnContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      height: verticalScale(48),
      width: horizontalScale(width),
      borderRadius: moderateScale(12),
      marginVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(14),
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Inter',
      fontSize: moderateScale(13.5),
      lineHeight: verticalScale(16),
      letterSpacing: moderateScale(0.2),
    },
  });

  return { styles };
};
