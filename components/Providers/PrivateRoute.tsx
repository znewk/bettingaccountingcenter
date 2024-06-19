'use client';

import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { useRouter } from 'next/navigation';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRoles: string[]; // Массив необходимых ролей
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRoles }) => {
  const router = useRouter();
  const token = useUserStore((state) => state.token);
  const userRoles = useUserStore((state) => state.roles) || [];
  const isLoading = useUserStore((state) => state.isLoading); // Добавляем состояние загрузки

  useEffect(() => {
    if (isLoading) return; // Подождем завершения инициализации

    if (!token) {
      router.push('/auth/login');
    } else if (!checkRoles(userRoles, requiredRoles)) {
      router.push('/unauthorized');
    }
  }, [token, userRoles, isLoading, router]);

  if (isLoading || !token || !checkRoles(userRoles, requiredRoles)) {
    return null; // Возвращаем компонент загрузки или null, пока происходит инициализация
  }

  return <>{children}</>;
};

// Функция для проверки наличия всех необходимых ролей у пользователя
const checkRoles = (userRoles: string[], requiredRoles: string[]): boolean => {
  return requiredRoles.some((role) => userRoles.includes(role));
};

export default PrivateRoute;
