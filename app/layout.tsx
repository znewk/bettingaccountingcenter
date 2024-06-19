"use client"

import React, { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore'; // Импортируйте ваш zustand стор
import '../styles/globals.css'; // Импорт глобальных стилей

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const initializeUser = useUserStore(state => state.initialize); // Получаем функцию initialize из zustand стора

  useEffect(() => {
    initializeUser(); // Вызываем функцию инициализации при загрузке приложения
  }, []);

  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
