import React from 'react';
import './Box.css';

export const Box = props => {

    return (
        <div className={props.classStyle}>
            <p>{props.message}</p>
        </div>
    )
}