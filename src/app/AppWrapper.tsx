'use client';
import AppThemeProvider from '@/theme/chakraTheme';
import React, { FC, ReactElement } from 'react';

interface AppWrapperProps {
  children: ReactElement;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

export default AppWrapper;
