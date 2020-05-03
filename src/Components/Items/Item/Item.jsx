import React from 'react';
import cls from './Item.module.css';

const Item = (props) => {
    let name = props.name;
    let description = props.description;
    let image = props.image;
    return (
        <div className={cls.card}>
            <div className={cls.cardBody}>
                <img src={props.image} className="card-img-top" alt="product"/>
                <p>{name}</p>
            </div>
            <div className={cls.describe}>
                    <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Item;
