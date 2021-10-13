import React from 'react';
import s from "./Heart.module.css";
import heartRed from "../../assets/images/heartred.svg";
import heart from "../../assets/images/heart.svg";
import { addSelectedIdAC, removeSelectedIdAC } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
const Heart = (props) => {
    const dispatch = useDispatch()
    const handleClick = (id) => {
        if (props.selected) {
            dispatch(removeSelectedIdAC(id))
        } else {
            dispatch(addSelectedIdAC(id))
        }

    }
    return (
        <div className={s.heart} onClick={() => {
            handleClick(props.hotelId)
        }}>
            {<img src={props.selected ? heartRed : heart} alt="heart" />}
        </div>
    );
};

export default Heart;