import React from 'react';
import cls from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={cls.header}>
           Соответсвие деревьев и Имен Славянских Божеств с описанием
        </div>
    );
}

export default Header;
