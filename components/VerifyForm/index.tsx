"use client";

import React, { useState } from 'react';
import styles from '../../styles/loginForm.module.css'; // Обновите путь к вашему модулю CSS
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton'; // Предполагается, что вы используете PrimeReact
import classnames from 'classnames';
import axios from 'axios'; // Для выполнения запросов к API
import { VerificationFormSchema, VerificationFormSchemaType } from '@/schemas/schemas/verification/verification.schema'; // Импорт вашей схемы Zod
import { useVerificationStore } from '@/store/useVerificationStore';

const VerifyForm = () => {
    const verify = useVerificationStore(state => state.verify);

    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<VerificationFormSchemaType>({
        resolver: zodResolver(VerificationFormSchema),
        defaultValues: {
            iin: '',
            scope: 'ID_CARD' // Значение по умолчанию для поля scope
        },
    });

    const onSubmit = async (data: VerificationFormSchemaType) => {
        setLoading(true);
        try {
            await verify({ iin: data.iin, scope: data.scope }); // Вызов функции verify из zustand стора
        } catch (error) {
            console.error("Failed to verify:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="container" className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Цент учёта ставок</h1>
                <span className={styles.subtitle}>Верификация пользователя</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputBody}>
                    <label htmlFor="iin" className={styles.inputLabel}>ИИН*</label>
                    <Controller
                        name="iin"
                        control={control}
                        render={({ field }) => (
                            <InputText id="iin"
                                required
                                disabled={loading}
                                {...field}
                                className={classnames(errors.iin ? 'p-invalid' : '', styles.input)}
                                placeholder="Введите ИИН"
                            />
                        )}
                    />
                    {errors.iin && <small className="p-error">{errors.iin.message}</small>}
                </div>

                <div className={styles.radioGroup}>
                    <label className={styles.inputLabel}>Выберите тип документа</label>
                    <div style={{marginBottom: 10}} className={styles.radios}>
                        <Controller
                            name="scope"
                            control={control}
                            render={({ field }) => (
                                <RadioButton inputId="idCard" name="scope" value="ID_CARD" onChange={(e) => field.onChange(e.value)} checked={field.value === 'ID_CARD'} />
                            )}
                        />
                        <label htmlFor="idCard" style={{marginLeft: 5, display: 'inline-block'}}>Удостоверение личности</label>
                    </div>
                    <div className={styles.radios}>
                        <Controller
                            name="scope"
                            control={control}
                            render={({ field }) => (
                                <RadioButton inputId="passport" name="scope" value="PASSPORT" onChange={(e) => field.onChange(e.value)} checked={field.value === 'PASSPORT'} />
                            )}
                        />
                        <label htmlFor="passport" style={{marginLeft: 5, display: 'inline-block'}}>Паспорт</label>
                    </div>
                </div>

                <div className={styles.footer}>
                    <Button type="submit" label="Пройти верификацию" className={styles.submitButton} />
                </div>
            </form>
        </div>
    );
};

export default VerifyForm;
