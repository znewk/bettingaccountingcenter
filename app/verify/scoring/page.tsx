import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import Header from '@/components/Header';
import Head from "next/head";
import { Metadata } from 'next';
import styles from "../../../styles/loginPage.module.css"
import ScoringForm from '@/components/ScoringForm';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};

const Scoring: React.FC = () => {
    return (
        <div>
            <Header/>

            <div className={styles.container}>
                <ScoringForm/>
            </div>
        </div>
    );
}

export default Scoring;
