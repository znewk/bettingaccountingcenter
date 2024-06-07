import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setToken } from '../../../store/slices/userSlice';
import { Button } from 'primereact/button';
import Header from '@/components/Header';
import Head from "next/head";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Центр учёта ставок',
};

const Login: React.FC = () => {
    return (
        <div>
            <Header/>
        </div>
    );
}

export default Login;
