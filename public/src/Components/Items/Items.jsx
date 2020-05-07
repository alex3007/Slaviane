import React from 'react';
import cls from './Items.module.css';
import Item from './Item/Item';

const Items = (props) => {
        return (
        <div className={cls.itemContainer}>
            <Item/>
        </div>
    );
}
export default Items;


