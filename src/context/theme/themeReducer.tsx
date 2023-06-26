type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface Colors {
  primary: string;
  titleText: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  tabText: string;
  primaryBackground: string;
  secondaryBackground: string;
}

export interface ThemeState {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  dark: boolean;
  colors: Colors;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: false,
  colors: {
    primary: '#f50057',
    secondary: '#3D2973',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#F5F5F7',
    titleText: '#3D2973',
    textPrimary: '#373764',
    tabText: '#696969',
    textSecondary: '#69698B',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(0,0,0,0.7)',
  dark: true,
  colors: {
    primary: '#311b92',
    secondary: 'white',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#F5F5F7',
    titleText: '#3D2973',
    tabText: '#696969',
    textPrimary: '#373764',
    textSecondary: '#69698B',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };

    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
