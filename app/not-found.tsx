"use client"
import styles from '../styles/main.module.css'
import { Metadata } from 'next';
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};

const NotFound: React.FC = () => {
    return (
        <div>
            <Header/>

            <div className={styles.container}>
                <h1>404 not found</h1>
            </div>
        </div>
    );
}

export default NotFound;
