// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => null;

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-device-info', () => {
  return {
    getVersion: () => 4,
  };
});

jest.mock('react-native', () => {
  const ReactNative = jest.requireActual('react-native');
  ReactNative.NativeModules.DeviceInfoManager = {
    getUniqueDeviceId: jest.fn().mockResolvedValue('device-id-test-12345'),
  };

  return ReactNative;
});
