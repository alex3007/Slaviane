import React from 'react';
import cls from './Description.module.css';


const Description = (props) => {

    let descriptionId;
    let pathArray = props.soul.map(e => (e.path));
    let descriptionArray = props.soul.map(e => (e.description));
    let n = pathArray.length;
    for (let i = 0; i <= n; i++) {
        if (props.soulPath === pathArray[i]) {
            descriptionId = i
        }
    }
    return (
        <div className={cls.textContainer}>
            {descriptionArray[descriptionId]}
        </div>

    )
};

export default Description;
