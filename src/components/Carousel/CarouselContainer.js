import React from 'react';
import s from "./CarouselContainer.module.css";
import { Carousel } from '@trendyol-js/react-carousel';
import one from "../../assets/images/1.png";
import free from "../../assets/images/3.png";
import four from "../../assets/images/4.png";

const CarouselContainer = () => {
    return (
        <div className={s.wrapper}>
            <Carousel show={3.5} swiping={true}>
                <img className={s.carousel__item} src={one} alt="forest" />
                <img className={s.carousel__item} src={four} alt="forest" />
                <img className={s.carousel__item} src={free} alt="forest" />
                <img className={s.carousel__item} src={four} alt="forest" />
            </Carousel>
        </div>
    );
};

export default CarouselContainer;