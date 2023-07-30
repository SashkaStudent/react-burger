import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CHANGE_FORGOT_EMAIL } from "../../services/actions/forgot-password";
import { patchUser, postPasswordReset } from "../../utils/api";
import pagesStyle from "./pages.module.css"
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_PROFILE_PASSWORD } from "../../services/actions/profile";
import { CHANGE_USER, postLogoutUser } from "../../services/actions/user";

function Profile() {
  const getProfileStore = store => { return store.profile }
  const getUserStore = store => store.user;
  const {password, valid } = useSelector(getProfileStore);
  const { name, email } = useSelector(getUserStore);
  


  const dispatch = useDispatch();

  const navButtonClassName ='text text_type_main-medium pt-4 pb-4'
  const navButtonClassNameInactive ='text text_type_main-medium text_color_inactive pt-4 pb-4'
  const onNameChange = e => {
    dispatch({ type: CHANGE_USER, data: { user: {name: e.target.value, email: email}} });
    patchUser(localStorage.getItem("accessToken"), {name: e.target.value, email: email});
  }
  const onEmailChange = e => {
    dispatch({ type: CHANGE_USER, data: { user: {name: name, email: e.target.value}} });
    dispatch({ type: CHANGE_PROFILE_EMAIL, valid: e.nativeEvent.target.validity.valid })
    patchUser(localStorage.getItem("accessToken"), {name: name, email: e.target.value});

  }
  const onPasswordChange = e => {
    dispatch({ type: CHANGE_PROFILE_PASSWORD, password: e.target.value })
    patchUser(localStorage.getItem("accessToken"), {name: name, email: email, password: e.target.value});

  }

  const onLogout = e =>{
    dispatch(postLogoutUser(localStorage.getItem("refreshToken")));
  }

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

        
            <p onClick={onLogout} className={`${pagesStyle.buttonText} ${navButtonClassNameInactive}`}>
              Выход</p>
          
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