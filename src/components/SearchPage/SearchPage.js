import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SET_LOGOUT } from "../../redux/reducer/auth";
import s from "./SearchPage.module.css";
import logout from "../../assets/images/logout.svg"
import SearchPanel from '../SearchPanel/SearchPanel';
import SelectedContainer from '../Selected/Selected';
import MainContainer from '../Main/Main';
import { Redirect } from 'react-router';
import { search } from '../../redux/reducer';

const SearchPage = () => {
    const auth = useSelector(store => store.auth.auth)
    const date = useSelector(store => store.searchPage.search.date);
    const city = useSelector(store => store.searchPage.search.city);
    const days = useSelector(store => store.searchPage.search.days);
    const searchError = useSelector(store => store.searchPage.searchError);
    const dateOut = useSelector(store => store.searchPage.search.dateOut)
    const selectedCounter = useSelector(store => store.searchPage.selectedHotels.length);
    const dispatch = useDispatch();
    useEffect(() => {
        search(dispatch, date, days)
    }, [])
    if (!auth) {
        return <Redirect to={"/LoginPage"} />
    }

    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.header__logo}>Simple Hotel Check</div>
                <div className={s.header__logout} onClick={() => {
                    dispatch({ type: SET_LOGOUT })
                }}>
                    <span className={s.header__text}>Выйти</span>
                    <img src={logout} alt="logout" />
                </div>
            </header>
            <div className={s.content}>
                <div className={s.leftAside}>
                    <SearchPanel date={date}
                        city={city} days={days} dateOut={dateOut}
                        error={searchError}
                    />
                    <SelectedContainer />
                </div>
                <MainContainer date={date} selectedCounter={selectedCounter} />

            </div>

        </div>
    );
};

export default SearchPage;