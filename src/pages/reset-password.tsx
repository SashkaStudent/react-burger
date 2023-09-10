import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ChangeEvent } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CHANGE_RESET_CODE, CHANGE_RESET_PASSWORD, TOGGLE_RESET_VISIBILITY } from "../services/types/action-constants";
import { useDispatch, useSelector } from "../services/types/hooks";
//import { CHANGE_RESET_CODE, CHANGE_RESET_PASSWORD, TOGGLE_RESET_VISIBILITY } from "../services/actions/reset-password";
import { postNewPassword } from "../utils/api";
import pagesStyle from "./pages.module.css"

function ResetPassword() {
  //const getResetStore = store => store.reset;
  const { code, password, visibility } = useSelector(store => store.reset);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_RESET_PASSWORD, password: e.target.value })
  }
  const onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: CHANGE_RESET_CODE, code: e.target.value })
  }
  // const onIconClick = e => {
  //   dispatch({ type: TOGGLE_RESET_VISIBILITY })

  // }
  const onSaveClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postNewPassword(password, code).then(req => {
      if (req.success) {
        dispatch({ type: CHANGE_RESET_PASSWORD, password: "" })
        dispatch({ type: CHANGE_RESET_CODE, code: "" })
        navigator('/login');
      }
    });


  }
  return (
    <div className={pagesStyle.content}>
      <form className={pagesStyle.form}>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          onChange={onPasswordChange}
          value={password}
          name={'password'}
          extraClass="mb-2"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={onCodeChange}
          value={code}
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