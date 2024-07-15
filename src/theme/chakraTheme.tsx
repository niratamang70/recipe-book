import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type AppThemeProviderProps = {
  children: ReactNode;
};

const customTheme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: {
          xl: 'container.xl',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg'
        }
      }
    }
  }
});

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};

export default AppThemeProvider;
