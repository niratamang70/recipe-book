'use client';
import { Inter } from 'next/font/google';
import { FC, Fragment, ReactElement } from 'react';
import Navbar from '@/components/navbar';
import AppWrapper from './AppWrapper';

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
        <AppWrapper>
          <Fragment>
            <Navbar />
            {children}
          </Fragment>
        </AppWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
