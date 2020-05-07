import React from 'react';
import cls from './Item.module.css';

const Item = (props) => {
    return (
        <div className={cls.card}>
            <div className={cls.cardBody}>
                <p>Описание</p>
            </div>
        </div>
    );
}

export default Item;
