import React, { useState } from 'react';
import Button from '../Button/Button';
import { validateEmail, validatePassword } from '../utils/utils';
import { useDispatch, useSelector } from "react-redux";
import s from "./LoginPage.module.css"
import { Redirect } from "react-router-dom"
import { SET_LOGIN } from '../../redux/reducer/auth';
const LoginPage = () => {
    const auth = useSelector(s => s.auth.auth)
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const dispatch = useDispatch()
    const toLogin = () => {
        if (login.length != 0 && loginError && passwordError) {
            dispatch({ type: SET_LOGIN })
        }
    }
    if (auth == true) {
        return <Redirect to="/searchPage" />

    }
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.auth}>
                    <div className={s.auth__title}>Simple Hotel Check</div>
                    <div className={s.input__content_login}>
                        <span className={!loginError === true && loginError != null ? "red" + " " + [s.input__title] : [s.input__title]}>Логин</span>
                        <input className={!loginError === true && loginError != null ? "inputError" + " " + [s.input__login] : [s.input__login]}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            onBlur={() => setLoginError(validateEmail(login))}
                        />
                        {loginError === false ? <p className={s.error}>Проверьте логин. Логин - любая почта. </p> : null}
                    </div>
                    <div className={s.input__content_password}>
                        <span className={!passwordError === true && passwordError != null ? [s.input__title] + " " + "red" : [s.input__title]}>Пароль</span>
                        <input className={!passwordError === true && passwordError != null ? [s.input__password] + " " + "inputError" : [s.input__password]}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => setPasswordError(validatePassword(password))}
                        />
                        {passwordError === false ? <p className={s.error}>Проверьте пароль. Длинна - 8 символов, без пробелов.</p> : null}
                    </div>
                    <Button text="Войти" func={() => {
                        setLoginError(validateEmail(login))
                        setPasswordError(validatePassword(password))
                        toLogin()
                    }} />
                </div>
            </div>
        </div >
    );
};

export default LoginPage;