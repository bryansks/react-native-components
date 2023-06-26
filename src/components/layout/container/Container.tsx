import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Gradient } from '@digitaltitransversal/tr_superapp_theme';

import type { Colors } from '../../../context/theme/themeReducer';
import { ThemeContext } from '../../../context/theme/ThemeContext';
import { CustomThemeProvider } from '../../../context/theme/ThemeContext';

type ContainerProps = {
  children: React.ReactNode;
  isWithGradient?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  isWithGradient = false,
}) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { styles } = FcStyle(colors);

  return (
    <CustomThemeProvider>
      {isWithGradient ? (
        <Gradient
          isActive
          style={styles.gradientStyle}
          activeColors={['#F5F5FC', 'blue']}
          notActiveColors={['#ffffff', '#ffffff']}
        >
          <SafeAreaView style={styles.withGradientCtn}>{children}</SafeAreaView>
        </Gradient>
      ) : (
        <SafeAreaView style={styles.withOutGradientCtn} testID={'safeAreaView'}>
          {children}
        </SafeAreaView>
      )}
    </CustomThemeProvider>
  );
};

const FcStyle = (colors: Colors) => {
  const styles = StyleSheet.create({
    gradientStyle: {
      flex: 1,
    },
    withGradientCtn: {
      flex: 1,
    },
    withOutGradientCtn: {
      flex: 1,
      backgroundColor: colors.primaryBackground,
    },
  });

  return { styles };
};
