import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Button from '../Button/Button';
import s from "./SearchPanel.module.css";
import { setDateAC, setCityAC, setDaysAC, search } from '../../redux/reducer/index';
const SearchPanel = (props) => {

    const dispatch = useDispatch();
    const [city, setCity] = useState(props.city);
    const [date, setDate] = useState(props.date);
    const [days, setDays] = useState(props.days);
    return (
        <div className={s.wrapper}>
            <div className={s.input__content}>
                <span className={s.input__title}>Локация</span>
                <input className={s.input__location} name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={() => dispatch(setCityAC(city))}
                />
            </div>
            <div className={s.input__content}>
                <span className={s.input__title}>Дата заселения</span>
                <input type="date" className={s.input__date} name="date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    onBlur={() => dispatch(setDateAC(date))}
                />
            </div>
            <div className={s.input__content}>
                <span className={s.input__title}>Количество дней</span>
                <input className={s.input__daysCounter} name="daysCounter"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    onBlur={() => dispatch(setDaysAC(days))}
                />
            </div>

            <Button text="Найти" func={() => {
                search(dispatch, props.date, props.days)
            }} />
            {props.error ? <p className={s.error}>Проверте правильность введенных данных</p> : null}
        </div>
    );
};

export default SearchPanel;