import React, { useEffect, useState } from 'react';
import s from "./Main.module.css";
import arrow from "../../assets/images/arrow.svg";
import { useSelector } from "react-redux";
import CarouselContainer from '../Carousel/CarouselContainer';
import Hotel from '../Hotel/Hotel';
import { dateTransform } from '../utils/utils';
const MainContainer = (props) => {
    const [date, setDate] = useState("");
    const city = useSelector(store => store.searchPage.search.city);
    const searchResult = useSelector(store => store.searchPage.searchResult);
    const days = useSelector(store => store.searchPage.search.days);
    const selectedCounter = useSelector(store => store.searchPage.selectedHotels.length);
    const selectedId = useSelector(store => store.searchPage.selectedId);

    useEffect(() => {
        if (props.date != null) {
            const date = dateTransform(props.date)
            setDate(date)
        }
    })
    return (
        <Main
            date={date}
            days={days}
            selectedCounter={selectedCounter}
            city={city}
            searchResult={searchResult}
            selectedId={selectedId}
        />
    )

};

const Main = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.main__header}>
                <div>
                    <h1>Отели
                        <span> <img src={arrow} alt="arrow" className={s.arrow} /></span>
                        <span>{props.city}</span></h1>
                </div>
                <div className={s.date}>
                    {props.date}
                </div>
            </div>
            <div className={s.main__carousel}>
                <CarouselContainer />
            </div>
            <div className={s.selected}>
                <p>Добавленное в Избранное: <span className={s.selectedCounter}>{props.selectedCounter}</span> отеля</p>
            </div>
            <div className={s.main__searchResult}>
                {props.searchResult.map(item => {
                    return <Hotel
                        hotelId={item.hotelId}
                        selectedId={props.selectedId}
                        key={item.hotelId}
                        hotelName={item.hotelName}
                        date={props.date}
                        days={props.days}
                        rating={item.stars}
                        price={item.priceAvg}
                    />
                })}
            </div>
        </div>
    );
}
export default MainContainer;

