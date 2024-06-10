import React, { ReactNode } from 'react';
import CabinetHeader  from '@/components/CabinetHeader';
import ReduxProvider from '../../components/Providers/ReduxProvider'; // Измените путь в зависимости от вашей структуры
import '../../styles/globals.css'; // Импорт глобальных стилей
import styles from '../../styles/cabinetLayout.module.css'

interface CabinetLayoutProps {
  children: ReactNode;
  cabinetHeaderProps: {title: string}; // Добавлен пропс для CabinetHeader
}
const CabinetLayout: React.FC<CabinetLayoutProps> = ({ children, cabinetHeaderProps  }) => {
  return (
    <div>
      <CabinetHeader {...cabinetHeaderProps} />
      <ReduxProvider>
        <div className={styles.container}>
          {children}
        </div>
      </ReduxProvider>
    </div>
  );
};

export default CabinetLayout;
