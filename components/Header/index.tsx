import React from 'react';
import styles from '../../styles/header.module.css'
import Link from 'next/link';
import Image from "next/image";
import Logo from '../Logo';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"} style={{textDecoration: 'none', display: 'inline-block'}}>
        <Logo/>
      </Link>
    </header>
  );
};

export default Header;
