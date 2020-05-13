import React from 'react';
import cls from './Items.module.css';
import {Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import kolo from '../../Assets/images/kolo.png';


const Items = (props) => {
    return (

        <div>
            <div className={cls.items}>
                    <Route exact path={props.path} render=
                        {() => <Item path={props.path} soul={props.soul} newSoulPath={props.newSoulPath}/>}/>

                    <Route exact path={props.path + props.soulPath} render=
                        {() => {
                            if (props.soulPath === '/gods') {
                                return (
                                    <img className={cls.startImage} src={kolo}/>)
                            }
                            else if (props.soulPath === '') {
                                return <div></div>
                            }
                            else {
                                return <Description history={props.history} soul={props.soul}
                                                    soulPath={props.soulPath}/>
                            }
                        }}/>
            </div>
        </div>
    )
};

export default Items;
