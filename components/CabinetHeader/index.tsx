'use client'

import React, { useState } from 'react';
import styles from '../../styles/cabinetHeader.module.css'
import Link from 'next/link';
import classnames from 'classnames'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { menuItems } from './data';

const CabinetHeader: React.FC<{title: string}> = ({ title }) => {
    const [visible, setVisible] = useState(false);
    const userName = useSelector((state: RootState) => state.user.name);

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <Logo/>
        </div>
    );

    return (
        <header className={styles.header}>
            <div className={styles.titleBlock}>
                <Button icon="pi pi-align-left" onClick={() => setVisible(true)} style={{padding: 5, marginRight: 15}} />
                <Link href={'/cabinet'} className='link'>
                    <span className={styles.title1}>Кабинет </span>
                </Link>
                <span className={styles.title2}> / {title}</span>
            </div>
            <div className={styles.user}>
                <Link href={'/cabinet/profile'} className={classnames('link', styles.linkBody)}>
                    <span className={styles.userItem}>
                        <span className="pi pi-user" style={{marginRight: 10}}></span> {userName}
                    </span>
                </Link>
                <Link href={'/cabinet/settings'} className={classnames('link', styles.linkBody)}>
                    <span className={styles.userItem}>
                        <i className="pi pi-cog"></i>
                    </span>
                </Link>
                <Link href={'/cabinet/notifications'} className={classnames('link', styles.linkBody)}>
                    <span className={styles.userItem}>
                        <i className="pi pi-bell"></i>
                    </span>
                </Link>
            </div>


            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)}>
                {
                    menuItems.map((item, idx) => (
                        <div className={styles.list} key={idx}>
                            <span className={styles.listTitle}>{item.title}</span>

                            {
                                item.items.map((subItem, subIdx) => (
                                    <Link className='link' href={subItem.href} key={subIdx}>
                                        <span className={styles.listItem}>
                                            <i className={subItem.ico} style={{marginRight: 10}}></i>
                                            {subItem.title}
                                        </span>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
                
            </Sidebar>
        </header>
    );
};

export default CabinetHeader;
