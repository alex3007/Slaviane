import React from 'react';
import cls from './Header.module.css';

const Header = (props) => {
    return (
        <div className={cls.header}>
            <p>Соответсвие деревьев и Имен Славянских Божеств</p>
            <a className={cls.source} href="https://vedznich.ru/" > Источник: Vedznich.ru</a>
        </div>
    );
};

export default Header;
