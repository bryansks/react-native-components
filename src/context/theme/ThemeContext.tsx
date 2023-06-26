import React, { createContext, useEffect, useReducer } from 'react';

import { Appearance, AppState } from 'react-native';

import {
  ThemeState,
  themeReducer,
  lightTheme,
  darkTheme,
} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const defaultContext = {
  theme: lightTheme,
  setDarkTheme: () => null,
  setLightTheme: () => null,
};

export const ThemeContext = createContext(defaultContext as ThemeContextProps);

export const CustomThemeProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
  };
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
