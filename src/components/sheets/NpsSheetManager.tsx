import React from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, KeyboardAvoidingView, View } from 'react-native';

import { NpsSheet } from './NpsSheet';

type Options = {
  image: string;
  order: number;
  optionId: number;
  description: string;
  showQuestion: number;
};

export type Data = {
  questionId: number;
  description: string;
  type: string;
  show: boolean;
  order: number;
  options: Options[];
};

export const NpsSheetManager: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView>
          <NpsSheet />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};
