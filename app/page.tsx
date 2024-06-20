import React from "react";
import Header from '@/components/Header';
import styles from '../styles/main.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Центр учёта ставок',
};

const Index: React.FC = () => {
  return (
      <div>
          <Header/>

          <div className={styles.container}>
            <h1>Публичная страница</h1>
          </div>
      </div>
  );
}

export default Index;