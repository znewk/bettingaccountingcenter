import React, { ReactNode } from 'react';
import CabinetHeader from '@/components/CabinetHeader';
import '../../styles/globals.css'; // Импорт глобальных стилей
import styles from '../../styles/cabinetLayout.module.css';

interface CabinetLayoutProps {
  children: ReactNode;
  cabinetHeaderProps: { title: string }; // Добавлен пропс для CabinetHeader
}

const CabinetLayout: React.FC<CabinetLayoutProps> = ({ children, cabinetHeaderProps }) => {
  return (
    <div>
      <CabinetHeader {...cabinetHeaderProps} />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default CabinetLayout;
