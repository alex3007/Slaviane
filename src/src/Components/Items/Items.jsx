import React from 'react';
import cls from './Items.module.css';
import {Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import kolo from './../../images/kolo.png'

const Items = (props) => {

    return (

        <div>
            <Route path={props.path} render=
                {() => <Item soul={props.soul} newSoulPath={props.newSoulPath}/>}/>
            <Route path={props.soulPath} render=
                {() => <Description soul={props.soul} soulPath={props.soulPath}/>}/>
            <Route path='/gods' render=
                {() => <img className={cls.startImage} src={kolo} />}/>
        </div>
    )
};

export default Items;
