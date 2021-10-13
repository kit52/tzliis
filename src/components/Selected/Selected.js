import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SORTING_TO_PRICE, SORTING_TO_PRICE__REVERSE, SORTING_TO_STARS, SORTING_TO_STARS_REVERSE } from '../../redux/reducer/index';
import { dateTransform } from "../utils/utils";
import Hotel from '../Hotel/Hotel';
import s from "./Selected.module.css";
const SelectedContainer = () => {
    const selectedId = useSelector(store => store.searchPage.selectedId);
    const date = useSelector(store => store.searchPage.search.date);
    const days = useSelector(store => store.searchPage.search.days);
    const sortingToPrice = useSelector(store => store.searchPage.sortingToPrice);
    const sortingToStars = useSelector(store => store.searchPage.sortingToStars);
    const selectedHotels = useSelector(store => store.searchPage.selectedHotels)
    return (
        <Selected
            selectedHotels={selectedHotels}
            selectedId={selectedId}
            date={date}
            days={days}
            sortingToStars={sortingToStars}
            sortingToPrice={sortingToPrice}

        />
    )
};
const Selected = (props) => {
    const dispatch = useDispatch();
    const handleClickRating = () => {
        if (props.selectedHotels.length > 0) {
            if (props.sortingToStars == null) {
                dispatch({ type: SORTING_TO_STARS })
            } else if (props.sortingToStars == true) {
                dispatch({ type: SORTING_TO_STARS_REVERSE })
            } else if (props.sortingToStars == false) {
                dispatch({ type: SORTING_TO_STARS })
            }
        } else {
            alert("Cписок пуст!")
        }
    }
    const handleClickPrice = () => {
        if (props.selectedHotels.length > 0) {
            if (props.sortingToPrice == null) {
                dispatch({ type: SORTING_TO_PRICE })
            } else if (props.sortingToPrice == true) {
                dispatch({ type: SORTING_TO_PRICE__REVERSE })
            } else if (props.sortingToPrice == false) {
                dispatch({ type: SORTING_TO_PRICE })
            }
        } else {
            alert("Cписок пуст!")
        }
    }
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Избранное</div>
            <div className={s.sortContainer}>
                <div className={props.sortingToStars != null ? [s.rating + " " + "active"] : [s.rating]} onClick={() => handleClickRating()}>
                    Рейтинг
                    <div className={s.icon} >
                        <div className={props.sortingToStars == false ? [s.up + " " + "active_up"] : [s.up]} ></div>
                        <div className={props.sortingToStars == true ? [s.down + " " + "active_down"] : [s.down]}></div>
                    </div>
                </div>
                <div className={props.sortingToPrice != null ? [s.price + " " + "active"] : [s.price]} onClick={() => handleClickPrice()}>
                    Цена
                    <div className={s.icon} >
                        <div className={props.sortingToPrice == false ? [s.up + " " + "active_up"] : [s.up]}></div>
                        <div className={props.sortingToPrice == true ? [s.down + " " + "active_down"] : [s.down]}></div>
                    </div>
                </div>
            </div>
            <div className="selected">
                {props.selectedHotels.map(item => {
                    return <Hotel
                        item={item}
                        selectedHotels={props.selectedHotels}
                        hotelId={item.hotelId}
                        key={`${item.hotelId} + ${item.date} + ${item.days}`}
                        hotelName={item.hotelName}
                        date={item.dateIn}
                        days={item.days}
                        rating={item.stars}
                        price={item.priceAvg}
                    />
                })}
            </div>
        </div>
    );
}
export default SelectedContainer;