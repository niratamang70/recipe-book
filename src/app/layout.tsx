'use client';
import { Inter } from 'next/font/google';
import { FC, Fragment, ReactElement } from 'react';
import Navbar from '@/components/navbar';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

interface AppProps {
  children: ReactElement;
}

const RootLayout: FC<AppProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Recipe Book</title>
      </head>
      <body id={'root'}>
        <ChakraProvider>
          <Fragment>
            <Navbar />
            {children}
          </Fragment>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
