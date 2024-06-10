import React from 'react';
import { Metadata } from 'next';
import CabinetLayout from '../../CabinetLayout';
import PrivateRoute from '@/components/Providers/PrivateRoute';
import AccountingBet from '@/components/AccountingBet';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};
const cabinetHeaderProps = {
    title: 'Учёт ставок'
};

const AccountingBetPage: React.FC = () => {
    return (
        <PrivateRoute requiredRoles={['admin', 'manager']}>
            <CabinetLayout cabinetHeaderProps={cabinetHeaderProps}>
                <div>
                    <AccountingBet/>
                </div>
            </CabinetLayout>
        </PrivateRoute>
    );
}

export default AccountingBetPage;
