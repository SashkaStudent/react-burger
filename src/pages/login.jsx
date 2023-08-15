import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from "../services/actions/login";
import { Link } from "react-router-dom";
import pagesStyle from "./pages.module.css"
import { postAuth } from "../utils/api";
import { getLoginData } from "../services/actions/user";

function Login() {

  const getLoginStore = store => { return store.login }
  const { email, password, valid } = useSelector(getLoginStore);
  const dispatch = useDispatch();

  const onEmailChange = e => {
    dispatch({ type: CHANGE_LOGIN_EMAIL, email: e.target.value, valid: e.nativeEvent.target.validity.valid })

  }
  const onPasswordChange = e => {
    dispatch({ type: CHANGE_LOGIN_PASSWORD, password: e.target.value })

  }

  const onAuthClick = e => {
    e.preventDefault();
    dispatch(getLoginData(email, password));
    dispatch({ type: CHANGE_LOGIN_EMAIL, email: '', valid: true })
    dispatch({ type: CHANGE_LOGIN_PASSWORD, password: '' })


  }

  return (
    <div className={pagesStyle.content}>
      <p className="text text_type_main-medium">
        Вход
      </p>
      <form className={pagesStyle.form} onSubmit={onAuthClick}>

        <Input
          type="email"
          error={!valid}
          onChange={onEmailChange}
          value={email}
          name={'email'}
          placeholder="E-mail"
          extraClass="mb-2"
          errorText={'Некорректный e-mail'}
        />

        <PasswordInput

          placeholder={'Пароль'}
          onChange={onPasswordChange}
          value={password}
          name={'password'}
          extraClass="mb-2"
        />
        
          <Button htmlType="submit" type="primary" extraClass={pagesStyle.button} size="medium" >
            Войти
          </Button>
      </form>

      <div className={pagesStyle.row}>
        <p className="text text_type_main-default text_color_inactive">
          Вы новый пользователь?
        </p>
        <Link to='/register'>
          <Button htmlType="button" type="secondary" size="medium" extraClass={pagesStyle.inlineButton}>
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={pagesStyle.row}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link to='/forgot-password'>
          <Button htmlType="button" type="secondary" size="medium" extraClass={pagesStyle.inlineButton}>
            Восстановить пароль
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default Login;