import React from 'react';
import s from "./Hotel.module.css";
import Stars from "../Stars/Stars";
import house from "../../assets/images/house.svg";
import Heart from "../Heart/Heart";
const Hotel = (props) => {
    return (
        <div className="hotel__wrapper" >
            <div className="hotel__icon">
                <img src={house} alt="house" />
            </div>
            <div className="hotel__container">
                <div className={s.container_top}>
                    <p className={s.hotel__name}> {props.hotelName}</p>
                    <Heart
                        item={{ ...props.item, dateIn: props.date, days: props.days }}
                        hotelId={props.hotelId}
                        selectedHotels={props.selectedHotels}
                    />
                </div>
                <div className={s.container_bottom}>
                    <div className={s.date__container}>
                        <span className={s.date}>{props.date}</span>
                        <span className={s.days}> - {props.days} день</span>
                        <Stars rating={props.rating} />
                    </div>

                    <div className={s.price__text}>
                        Price:  <span className={s.price}> {props.price} ₽</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;