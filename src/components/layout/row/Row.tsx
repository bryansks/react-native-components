import React from 'react';

import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | undefined;
  style?: StyleProp<ViewStyle>;
};

export const Row: React.FC<RowProps> = ({
  children,
  style = undefined,
  alignItems = 'center',
  justifyContent = 'space-between',
}) => {
  const { styles } = FcStyle();
  return (
    <View
      style={{
        ...(style as ViewStyle),
        ...styles.container,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      testID={'row-container'}
    >
      {children}
    </View>
  );
};

const FcStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  });

  return { styles };
};
