import React, { useContext } from 'react';

import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Row } from '../layout/row/Row';
import { Icons } from '../../types/enums/enums';
import { useForm } from '../../hooks/form/useForm';
import { Blockbutton } from '../buttons/Blockbutton';
import { CustomIconButton } from '../buttons/CustomIconButton';
import type { Colors } from '../../context/theme/themeReducer';
import { ThemeContext } from '../../context/theme/ThemeContext';
import { useDimentions } from '../../hooks/Dimentions/useDimentions';
import { ModalContext } from '../../context/modal/BottonSheetContext';

type FormState = {
  comment: string;
};

type NpsSheetProps = {};

export const NpsSheet: React.FC<NpsSheetProps> = ({}) => {
  const { hide } = useContext(ModalContext);

  const { formState, setFormState } = useForm<FormState>({
    comment: '',
  });
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { styles } = FcStyle(colors);

  return (
    <ScrollView>
      <View style={styles.constainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => hide()}>
            <View style={styles.sheetFormCtn}>
              <View style={styles.sheetForm} />
            </View>
          </TouchableOpacity>
          <Row alignItems="center">
            <View style={styles.titleCtn}>
              <Text style={styles.title} testID={'npsSheet-title'}>
                Your title
              </Text>
            </View>
            <CustomIconButton
              width={17}
              height={17}
              icon={Icons.Close}
              onPress={() => hide()}
            />
          </Row>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.subContainer}>
          <Text style={styles.boxTextTitle} testID={'npsSheet-boxTextTitle'}>
            Add you title
          </Text>
          <TextInput
            multiline
            maxLength={200}
            style={styles.input}
            keyboardType="default"
            value={formState.comment}
            placeholder="Write your text"
            onChangeText={(text) => setFormState('comment', text)}
          />
          <View style={styles.buttonCtn}>
            <Blockbutton
              width={340}
              title="Continuar"
              onPress={() => {
                null;
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const FcStyle = (colors: Colors) => {
  const { moderateScale, verticalScale, horizontalScale } = useDimentions();
  const styles = StyleSheet.create({
    constainer: {
      elevation: 3.6,
      shadowOffset: {
        width: 0,
        height: -6,
      },
      marginTop: 10,
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      shadowColor: '#000',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: '#FFFFFF',
      paddingBottom: verticalScale(20),
    },
    subContainer: {
      marginHorizontal: horizontalScale(20),
    },
    divider: {
      height: verticalScale(4),
      backgroundColor: '#B4B4C5',
      marginVertical: verticalScale(20),
    },
    sheetFormCtn: {
      alignItems: 'center',
    },
    sheetForm: {
      borderRadius: 2,
      backgroundColor: '#B4B4C5',
      height: verticalScale(4),
      width: horizontalScale(32),
      marginVertical: verticalScale(20),
    },
    titleCtn: {
      width: '90%',
      paddingBottom: 5,
    },
    title: {
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0.3,
      color: colors.textPrimary,
      fontFamily: 'Poppins-SemiBold',
    },
    circle: {
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E3E1EE',
      height: verticalScale(40),
      width: horizontalScale(40),
    },
    boxTextTitle: {
      lineHeight: 20,
      letterSpacing: 0.2,
      color: colors.textPrimary,
      fontFamily: 'Inter-Regular',
      fontSize: moderateScale(16),
      marginTop: verticalScale(10),
      marginBottom: moderateScale(10),
    },
    input: {
      height: verticalScale(80),
      padding: 10,
      borderWidth: 1,
      paddingTop: 10,
      borderRadius: 12,
      borderColor: '#82829E',
      justifyContent: 'flex-start',
    },
    buttonCtn: {
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    gradientStyle: {
      flex: 1,
    },
  });

  return { styles };
};
