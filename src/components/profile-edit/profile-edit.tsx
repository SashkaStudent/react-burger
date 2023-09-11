import { Button, EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { changeUserData } from "../../services/actions/user";
import { CHANGE_USER } from "../../services/types/action-constants";
import profileEditStyles from "./profile-edit.module.css";
import { useEffect} from "react";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function ProfileEdit() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  useEffect(()=> setValues({"name": user.name, "email": user.email}),[user]);

  const onSaveClick = () =>{
    dispatch({ type: CHANGE_USER, data: { user: {name: values['name'], email: values['email']}} });
    dispatch(changeUserData(localStorage.getItem("accessToken"), 
    {name: values['name'], email: values['email'], password: values['password']}));
  }

  const onCancelClick = () =>{
    resetForm({"name": user.name, "email": user.email, "password": ''});
   }

  return (
    <form className={profileEditStyles.profileEdit}>
      <Input
        type="text"
        onChange={(e)=>{console.log(values, errors); handleChange(e)}}
        value={values['name']??""}
        name={'name'}
        icon={'EditIcon'}
        placeholder="Имя"
        errorText={'Ошибка'}
      />
      <EmailInput
        placeholder={'E-mail'}
        onChange={handleChange}
        value={values['email']??""}
        name={'email'}
      />
      <Input
        type="password"
        placeholder={'Пароль'}
        onChange={handleChange}
        value={values['password']??""}
        name={'password'}
        icon={'EditIcon'}
        errorText={errors['password']}
      />
      <Button htmlType="button" onClick={onSaveClick}>Сохранить</Button>
      <Button htmlType="button" onClick={onCancelClick}>Отмена</Button>
    </form>
  );
}

export default ProfileEdit;