import React from 'react';
import cls from './Header.module.css';

const Header = (props) => {
    return (
        <header className={cls.header}>
            <i className='fa fa-2x fa-pagelines'/>
            <p>Виды и описание деревьев</p>
        </header>
    );
};

export default Header;
