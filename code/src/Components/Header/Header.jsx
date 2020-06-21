import React from 'react';
import cls from './Header.module.css';

const Header = (props) => {
    return (
        <header className={cls.header}>
            <p>Соответсвие деревьев и Имен Славянских Божеств</p>
        </header>
    );
};

export default Header;
