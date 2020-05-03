import React from 'react';
import Switcher from './Switcher';

const SwitherContainer = (props) => {
    return (
        <div >
        <Switcher path={props.path} />
        </div>
    );
}

export default SwitherContainer;
