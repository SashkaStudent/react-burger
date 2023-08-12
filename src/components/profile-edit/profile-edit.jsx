import { Button, EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { changeUserData, CHANGE_USER, postLogoutUser } from "../../services/actions/user";
import { CHANGE_PROFILE_EMAIL, CHANGE_PROFILE_NAME, CHANGE_PROFILE_PASSWORD } from "../../services/actions/profile";
import profileEditStyles from "./profile-edit.module.css";


function ProfileEdit() {
  const getProfileStore = store => { return store.profile }
  const getUserStore = store => store.user;
  const {name, email, password, valid } = useSelector(getProfileStore);
  const user = useSelector(getUserStore);
  const dispatch = useDispatch();

  const onNameChange = e => {
    dispatch({ type: CHANGE_PROFILE_NAME, name: e.target.value });
  }
  const onEmailChange = e => {
    dispatch({ type: CHANGE_PROFILE_EMAIL, email: e.target.value, valid: e.nativeEvent.target.validity.valid })
  }
  const onPasswordChange = e => {
    dispatch({ type: CHANGE_PROFILE_PASSWORD, password: e.target.value })
  }

  const onLogout = e =>{
    dispatch(postLogoutUser(localStorage.getItem("refreshToken")));
  }

  const onSaveClick = e =>{
    dispatch({ type: CHANGE_USER, data: { user: {name: name, email: email}} });
    dispatch(changeUserData(localStorage.getItem("accessToken"), {name: name, email: email, password: password}));
  }

  const onCancelClick = e =>{
    dispatch({ type: CHANGE_PROFILE_NAME, name: user.name });
    dispatch({ type: CHANGE_PROFILE_EMAIL, email: user.email, valid: true })
   }

  return (
    <div className={profileEditStyles.profileEdit}>
      <Input
        type="text"
        onChange={onNameChange}
        value={name}
        name={'email'}
        icon={'EditIcon'}
        placeholder="Имя"
        errorText={'Ошибка'}
      />
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
      <Button htmlType="button" onClick={onSaveClick}>Сохранить</Button>
      <Button htmlType="button" onClick={onCancelClick}>Отмена</Button>
    </div>
  );
}

export default ProfileEdit;