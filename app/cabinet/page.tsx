import React from 'react';
import { Metadata } from 'next';
import CabinetLayout from './CabinetLayout';
import PrivateRoute from '@/components/Providers/PrivateRoute';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};
const cabinetHeaderProps = {
    title: 'Главная'
};

const Cabinet: React.FC = () => {
    return (
        <PrivateRoute requiredRoles={['admin', 'manager']}>
            <CabinetLayout cabinetHeaderProps={cabinetHeaderProps}>
                <div>
                </div>
            </CabinetLayout>
        </PrivateRoute>
    );
}

export default Cabinet;
