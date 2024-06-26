import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import Header from '@/components/Header';
import Head from "next/head";
import { Metadata } from 'next';
import styles from "../../../styles/loginPage.module.css"
import LoginForm from '@/components/LoginForm';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};

const Login: React.FC = () => {
    return (
        <div>
            <Header/>

            <div className={styles.container}>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;
