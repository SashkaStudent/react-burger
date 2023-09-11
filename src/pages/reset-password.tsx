import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { postNewPassword } from "../utils/api";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import pagesStyle from "./pages.module.css"

function ResetPassword() {
  const navigator = useNavigate();
  const {values, handleChange, resetForm} = useFormAndValidation();

  const onSaveClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postNewPassword(values['password'], values['code']).then(req => {
      if (req.success) {
        resetForm();
        navigator('/login');
      }
    });


  }
  return (
    <div className={pagesStyle.content}>
      <form className={pagesStyle.form}>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          onChange={handleChange}
          value={values['password']??""}
          name={'password'}
          extraClass="mb-2"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={handleChange}
          value={values['code']??""}
          name={'code'}
          error={false}
          size={'default'}
          extraClass="ml-1"
        />
        <Button htmlType="submit" type="primary" size="medium" onClick={onSaveClick} extraClass={pagesStyle.button}>
          Восстановить
        </Button>
      </form>
      <div className={pagesStyle.row}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link to='/login'>
          <Button htmlType="button" type="secondary" size="medium" extraClass={pagesStyle.inlineButton}>
            Войти
          </Button>
        </Link>
      </div>

    </div>
  );
}

export default ResetPassword;