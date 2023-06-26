import 'react-native-gesture-handler';
import * as React from 'react';

import {
  ModalProvider,
  ModalConsumer,
  AppServices,
} from 'react-native-components-bryan';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStack } from './navigation/stacks/RootStack';

const App: React.FC = () => {
  return (
    <GlobalState>
      <RootStack />
    </GlobalState>
  );
};

const GlobalState = ({ children }: { children: JSX.Element }) => (
  <SafeAreaProvider>
    <AppServices>
      <NavigationContainer>
        <ModalProvider.ModalProvider>
          {children}
          <ModalConsumer.ModalConsumer />
        </ModalProvider.ModalProvider>
      </NavigationContainer>
    </AppServices>
  </SafeAreaProvider>
);

export default App;
