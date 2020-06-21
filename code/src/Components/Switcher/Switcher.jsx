import React from 'react';
import cls from './Switcher.module.css';
import {NavLink} from "react-router-dom";
const Switcher = (props) => {
    return (
        <div className={cls.btnGroup}>
        <div className="btn-group" role="group" aria-label="Basic example">

                <NavLink to={props.path.food}>
                    <button className="btn btn-secondary"><i className="fa fa-cutlery"/>Пицца</button>
                </NavLink>
                <NavLink to={props.path.drinks}>
                    <button className="btn btn-secondary"><i className="fa fa-glass"/>Напитки</button>
                </NavLink>
                <NavLink to={props.path.dishes}>
                    <button className="btn btn-secondary"><i className="fa fa-gift"/>Сувениры</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Switcher;
