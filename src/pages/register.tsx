import React from "react";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../utils/api";
import pagesStyle from "./pages.module.css";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function Register() {
  const {values, handleChange} = useFormAndValidation();
  const navigator = useNavigate();
  const onRegisterClick = (e:React.FormEvent) => {
    e.preventDefault();
    postRegister(values['name'], values['email'], values['password']).then(req => {
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
          onChange={handleChange}
          value={values['name']??""}
          name={'name'}
          size={'default'}
          extraClass="ml-1"
        />
        <EmailInput
          placeholder={'E-mail'}
          onChange={handleChange}
          value={values['email']??""}
          name={'email'}
          extraClass=""
        />
        <PasswordInput
          placeholder={'Пароль'}
          onChange={handleChange}
          value={values['password']??""}
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

