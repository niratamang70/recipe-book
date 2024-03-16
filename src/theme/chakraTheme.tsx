'use client'
import { ChakraProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface AppThemeProviderProps {
  children: ReactNode;
}
const { Button } = chakraTheme.components;
const customTheme = extendBaseTheme({
  components: {
    Button
  }
});
const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default AppThemeProvider;
