import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { CHANGE_FORGOT_EMAIL } from "../../services/actions/forgot-password";
import { postPasswordReset } from "../../utils/api";
import pagesStyle from "./pages.module.css"
function ForgotPassword() {
  const getForgotStore = store => { return store.forgot }
  const { email } = useSelector(getForgotStore);  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onEmailChange = e => {
    dispatch({ type: CHANGE_FORGOT_EMAIL, email: e.target.value })
  }
const onResetClick = e => {
  postPasswordReset(email)
  .then(req =>{
    if(req.success){
      navigate('/reset-password', { replace: true });
    }
  });
}
  return (
    <div className={pagesStyle.content}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>
      <Input
        type="email"
        onChange={onEmailChange}
        value={email}
        name={'email'}
        placeholder="E-mail"
        extraClass="mb-2"
        errorText={'Ошибка'}
      />
      <Button htmlType="button" type="primary" size="medium" extraClass={pagesStyle.button} onClick={onResetClick}>
        Восстановить
      </Button>

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

export default ForgotPassword;