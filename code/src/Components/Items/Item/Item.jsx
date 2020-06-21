import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";


const Item = (props) => {

    let itemsElements = props.soul
        .map(e => (
            <NavLink onClick={(p) => {
                props.newSoulPath(e.path)
            }} className={cls.item} to={props.path + e.path}>
                <p className={cls.itemName}>{e.name}</p>
            </NavLink>
        ));

    return (

        <div className={cls.flexItemsContainer}>
            {itemsElements}
        </div>
    );
};

export default Item;
