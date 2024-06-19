"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../styles/loginForm.module.css'; // Обновите путь к вашему модулю CSS
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton'; // Предполагается, что вы используете PrimeReact
import classnames from 'classnames';
import { useVerificationStore } from '@/store/useVerificationStore';
import { ProgressSpinner } from 'primereact/progressspinner';
import Link from 'next/link';
        

const ScoringForm = () => {
    const { isLoading, scoringPerson, scoringData } = useVerificationStore();

    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        scoringPerson()
    }, [])

    return (
        <div id="container" className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Цент учёта ставок</h1>
                <span className={styles.subtitle}>Верификация пользователя</span>
            </div>


            <div className={styles.scoringContainer}>

                {
                    isLoading ? (
                        <div style={{height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <ProgressSpinner />
                        </div>
                    ) : (
                        <div className={styles.resultBlock}>
                            <span className={styles.subtitle}>{scoringData?.success ? "Проверка успешно пройдена!" : "Проверка не пройдена!"}</span>

                            <img src={scoringData?.success ? "/success.png" : "/failed.png"} alt="result.icon" className={styles.resultImg}/>

                            <span className={styles.subtitle} style={{marginBottom: 30}}>{scoringData?.message}</span>

                            <Link href={scoringData?.returnUrl!}>
                                <Button label="Вернуться на страницу букмекера" style={{ width: '100%' }} />
                            </Link>
                            {!scoringData?.success && (
                                <span className={styles.support}>Связаться с Поддержкой</span>
                            )}
                        </div>
                    )
                }

            </div>
            
        </div>
    );
};

export default ScoringForm;
