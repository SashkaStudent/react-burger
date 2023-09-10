import React from "react";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../utils/api";
import pagesStyle from "./pages.module.css";
import { useDispatch, useSelector } from "../services/types/hooks";
import { CHANGE_REGISTER_EMAIL, CHANGE_REGISTER_NAME, CHANGE_REGISTER_PASSWORD } from "../services/types/action-constants";

function Register() {

  const { email, password, valid, name } = useSelector(store => store.register);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_REGISTER_EMAIL, email: e.target.value, valid: e.currentTarget.validity.valid })

  }
  const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_REGISTER_PASSWORD, password: e.target.value })
  }

  const onNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_REGISTER_NAME, name: e.target.value })

  }
  const onRegisterClick = (e:React.FormEvent) => {
    e.preventDefault();
    postRegister(name, email, password).then(req => {
      localStorage.setItem("accessToken", req.accessToken);
      localStorage.setItem("refreshToken", req.refreshToken);
      navigator('/login');
    }).catch((err) => console.log(err));
  }

  return (
    <div className={pagesStyle.content}>
      <p className="text text_type_main-medium">
        Регистрация
      </p>
      <form className={pagesStyle.form} onSubmit={onRegisterClick}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onNameChange}
          value={name}
          name={'name'}
          size={'default'}
          extraClass="ml-1"
        />
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={onEmailChange}
          value={email}
          name={'email'}
          extraClass=""
          errorText={'Некорректный e-mail'}
          error={!valid}
        />
        <PasswordInput
          placeholder={'Пароль'}
          onChange={onPasswordChange}
          value={password}
          name={'password'}
          extraClass=""
        />


        <Button htmlType="submit" type="primary" size="medium" extraClass={pagesStyle.button}>
          Зарегистрироваться
        </Button>
      </form>

      <div className={pagesStyle.row}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link to='/login'>
          <Button htmlType="button" type="secondary" size="medium" extraClass={pagesStyle.inlineButton}>
            Войти
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default Register;

