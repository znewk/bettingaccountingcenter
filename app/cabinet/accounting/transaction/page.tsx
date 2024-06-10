import React from 'react';
import { Metadata } from 'next';
import CabinetLayout from '../../CabinetLayout';
import PrivateRoute from '@/components/Providers/PrivateRoute';
import AccountingBet from '@/components/AccountingBet';
import AccountingTransaction from '@/components/AccountingTransaction';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};
const cabinetHeaderProps = {
    title: 'Учёт транзакций'
};

const AccountingBetPage: React.FC = () => {
    return (
        <PrivateRoute requiredRoles={['admin', 'manager']}>
            <CabinetLayout cabinetHeaderProps={cabinetHeaderProps}>
                <div>
                    <AccountingTransaction/>
                </div>
            </CabinetLayout>
        </PrivateRoute>
    );
}

export default AccountingBetPage;
