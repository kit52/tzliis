import React from 'react';
import s from "./Heart.module.css";
import heartRed from "../../assets/images/heartred.svg";
import heart from "../../assets/images/heart.svg";
import { addSelectedIdAC, removeSelectedIdAC } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
const Heart = (props) => {
    let item = []
    if (props.selectedHotels.length > 0) {
        item = [...props.selectedHotels.filter(i => i.hotelId == props.item.hotelId && i.dateIn == props.item.dateIn && i.days == props.item.days)];
    }

    const dispatch = useDispatch()
    const handleClick = (id) => {
        if (item.length > 0) {
            dispatch(removeSelectedIdAC(id, props.item.dateIn, props.item.days))
        } else {
            dispatch(addSelectedIdAC(props.item))
        }
    }
    return (
        <div className={s.heart} onClick={() => {
            handleClick(props.hotelId)
        }}>
            {<img src={item.length > 0 ? heartRed : heart} alt="heart" />}
        </div>
    );
};

export default Heart;