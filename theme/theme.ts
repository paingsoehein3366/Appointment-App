import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4F7C5C',
    background: '#FFF7ED',
    surface: '#FFFFFF',
    text: '#1F2937',
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#4F7C5C',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F9FAFB',
  },
};
