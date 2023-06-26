import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { rootStack } from '../../navigation/routes/Routes';
import type { RootStackParamList } from '../../models/navigation/models';

const Stack = createStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFFFFF" />
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        {rootStack.map((route, i) => (
          <Stack.Screen
            key={i}
            component={route.component}
            name={route.name as keyof RootStackParamList}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};
