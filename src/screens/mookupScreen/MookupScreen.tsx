import React, { useContext } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Chip } from '@digitaltitransversal/tr_superapp_theme';

import { Blockbutton } from '../../components/buttons/Blockbutton';
import { ModalContext } from '../../context/modal/BottonSheetContext';
import { Container } from '../../components/layout/container/Container';
import { NpsSheetManager } from '../..//components/sheets/NpsSheetManager';

const MookupScreen: React.FC = ({}) => {
  const { show, top, opacity } = useContext(ModalContext);
  const { styles } = FcStyle();
  return (
    <Container>
      <Animated.View
        style={{
          ...styles.animateView,
          opacity: opacity,
          transform: [{ translateY: top }],
        }}
      >
        <Chip
          backgroundColor="#149246"
          textStyle={styles.chipText}
          leftIcon={require('../../assets/icons/check.png')}
          text="¡Muchas gracias! Recibimos tus respuestas. "
        />
      </Animated.View>
      <View style={styles.container}>
        <Blockbutton
          onPress={() => show(NpsSheetManager)}
          title={'Show Bottonsheet'}
        />
      </View>
    </Container>
  );
};

export default MookupScreen;

const FcStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      fontSize: 16,
      color: '#373764',
      textAlign: 'justify',
      fontFamily: 'Poppins-Semibold',
    },
    chipText: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      lineHeight: 12,
      letterSpacing: 0.2,
      color: '#FFFFFF',
    },
    animateView: {
      left: '5%',
      right: '5%',
      position: 'absolute',
    },
  });

  return { styles };
};
