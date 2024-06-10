'use client'

import React, { ReactNode } from 'react';
import ReduxProvider from '../components/Providers/ReduxProvider'; // Измените путь в зависимости от вашей структуры
import '../styles/globals.css'; // Импорт глобальных стилей

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <head />
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
