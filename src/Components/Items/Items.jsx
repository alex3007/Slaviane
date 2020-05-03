import React from 'react';
import cls from './Items.module.css';
import Item from './Item/Item';

const Items = (props) => {
    let productItem = props.productItems.map(name => <Item name={name.name} description={name.description}
    image={name.image}/>)
    return (
        <div className={cls.itemContainer}>
            {productItem}
        </div>
    );
}
export default Items;


