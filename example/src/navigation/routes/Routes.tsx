import { MookupScreen } from 'react-native-components-bryan';

export interface Route {
  name: string;
  component: React.FC<any>;
}

export const rootStack: Route[] = [
  {
    name: 'HomeScreen',
    component: MookupScreen,
  },
];

export const rootTabs: Route[] = [];
