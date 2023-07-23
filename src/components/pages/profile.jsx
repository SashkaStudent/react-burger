import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CHANGE_FORGOT_EMAIL } from "../../services/actions/forgot-password";
import { postPasswordReset } from "../../utils/api";
import pagesStyle from "./pages.module.css"
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_PROFILE_PASSWORD } from "../../services/actions/profile";

function Profile() {
  const getProfileStore = store => { return store.profile }
  const { name, email, password, valid } = useSelector(getProfileStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navButtonClassName ='text text_type_main-medium pt-4 pb-4'
  const navButtonClassNameInactive ='text text_type_main-medium text_color_inactive pt-4 pb-4'
  const onNameChange = e => {
    dispatch({ type: CHANGE_PROFILE_NAME, name: e.target.value });
  }
  const onEmailChange = e => {
    dispatch({ type: CHANGE_PROFILE_EMAIL, email: e.target.value, valid: e.nativeEvent.target.validity.valid })
  }
  const onPasswordChange = e => {
    dispatch({ type: CHANGE_PROFILE_PASSWORD, password: e.target.value })
  }
  // const onResetClick = e => {
  //   postPasswordReset(email)
  //   .then(req =>{
  //     if(req.success){
  //       navigate('/reset-password', { replace: true });
  //     }
  //   });
  // }
  return (
    <div className={pagesStyle.profileContent}>
      <div className={pagesStyle.profileNav}>
        <NavLink to="/profile" className={pagesStyle.linkText}>
          {({ isActive, isPending }) => (
            <p className={isActive ? navButtonClassName : navButtonClassNameInactive}>Профиль</p>
          )}
        </NavLink>

        <NavLink to="/profile/orders" className={pagesStyle.linkText}>
          {({ isActive, isPending }) => (
            <p className={isActive ? navButtonClassName : navButtonClassNameInactive}>
              История заказов</p>
          )}
        </NavLink>

        <NavLink to="/exit" className={pagesStyle.linkText}>
          {({ isActive, isPending }) => (
            <p className={isActive ? navButtonClassName : navButtonClassNameInactive}>
              Выход</p>
          )}
        </NavLink>
        <p className="text text_type_main-default text_color_inactive pt-20">
          В этом разделе вы можете изменить&nbsp;свои персональные данные
        </p>

      </div>
      <div className={pagesStyle.profileEdit}>
        <Input
          type="text"
          onChange={onNameChange}
          value={name}
          name={'email'}
          icon={'EditIcon'}
          placeholder="Имя"
          errorText={'Ошибка'}
        >
        </Input>
        <EmailInput
          type={'email'}
          placeholder={'E-mail'}
          onChange={onEmailChange}
          value={email}
          name={'email'}
          icon={'EditIcon'}
          errorText={'Некорректный e-mail'}
          error={!valid}
        />
        <Input
          type="password"
          placeholder={'Пароль'}
          onChange={onPasswordChange}
          value={password}
          name={'password'}
          icon={'EditIcon'}
        />
      </div>


    </div>
  );
}

export default Profile;