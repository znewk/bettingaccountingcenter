'use client'

import React, { useState } from 'react';
import styles from '../../styles/loginForm.module.css'
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/userSlice';
import { LoginFormSchema, LoginFormSchemaType } from '../../schemas/schemas/login/login.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import { AppDispatch } from '@/store/store';

const LoginForm: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const loginFormDefaultValues: LoginFormSchemaType = {
        username: '',
        password: '',
    };
  
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormSchemaType>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: loginFormDefaultValues,
    });

    const onSubmit = async (data: LoginFormSchemaType) => {
        setLoading(true);
        try {
            await dispatch(login({ login: data.username, password: data.password }));
            console.log("Logged in successfully");
            router.push('/cabinet')
        } catch (error) {
            console.error("Failed to login:", error);
        } finally {
            setLoading(false);
        }
    };
    
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Цент учёта ставок</h1>
                <span className={styles.subtitle}>Авторизация пользователя</span>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputBody}>
                    <label htmlFor="username" className={styles.inputLabel}>Логин</label>
                    <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                        <InputText id="username" 
                            required
                            disabled={loading}
                            {...field} className={classnames(errors.username ? 'p-invalid' : '', styles.input)}
                            placeholder='user@bac.kz'
                         />
                    )}
                    />
                    {errors.username && <small className="p-error">{errors.username.message}</small>}
                </div>

                <div className={styles.inputBody}>
                    <label htmlFor="password" className={styles.inputLabel}>Пароль</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Password id="password" {...field} 
                                required
                                disabled={loading}
                                style={{width: '100%'}}
                                className={classnames(errors.username ? 'p-invalid' : '', styles.inputBody)}
                                pt={{ input: { style: { width: '100%' } } }}
                                toggleMask
                                feedback={false}
                                placeholder='********'
                            />
                        )}
                    />
                        {errors.password && <small className="p-error">{errors.password.message}</small>}
                </div>


                <div className={styles.footer}>
                    <Button type="submit" label="Вход" style={{width: '45%'}} />

                    <Button type="submit" label="Вход по ЭЦП" style={{width: '45%'}} />
                </div>
                
            </form>
        </div>
    );
}

export default LoginForm;
