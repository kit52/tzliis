import React from 'react';
import s from "./Button.module.css"
const Button = (props) => {
    return (
        <button className={s.btn} onClick={() => props.func()}>
            <span className={s.btn__text}>{props.text}</span>
        </button>
    );
};

export default Button;