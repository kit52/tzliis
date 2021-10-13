import React from 'react';
import s from './Stars.module.css';
import starGrey from "../../assets/images/stargrey.svg";
import star from "../../assets/images/star.svg";
const Stars = (props) => {
    let stars = [];
    for (let i = 1; i <= props.rating; i++) {
        stars.push(
            <img className={s.star} src={star} alt="stars" />
        )
    }
    if (stars.length !== 5) {
        let count = 5 - stars.length;
        for (let i = 1; i <= count; i++) {
            stars.push(
                <img className={s.star} src={starGrey} alt="stars" />
            )
        }
    }
    return (
        <div className={s.stars}>
            {stars.map(i => i)}
        </div>
    );
};

export default Stars;