'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useRouter } from 'next/navigation'

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRoles: string[]; // Массив необходимых ролей
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRoles }) => {
  const token = useSelector((state: RootState) => state.user.token);
  const userRoles: string[] = useSelector((state: RootState) => state.user.roles ?? []);
  const router = useRouter();

  useEffect(() => {
    console.log('token', token)
    console.log('userRoles', userRoles)
    if (!token) {
      router.push('/auth/login');
    } else if (!checkRoles(userRoles, requiredRoles)) {
      router.push('/unauthorized'); // Перенаправление на страницу с сообщением о запрете доступа
    }
  }, [token, userRoles, router]);

  if (!token || !checkRoles(userRoles, requiredRoles)) {
    return null; // Или компонент загрузки, пока происходит редирект
  }

  return <>{children}</>;
};

// Функция для проверки наличия всех необходимых ролей у пользователя
const checkRoles = (userRoles: string[], requiredRoles: string[]): boolean => {
  return requiredRoles.some(role => userRoles.includes(role));
};

export default PrivateRoute;