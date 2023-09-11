import React from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { postPasswordReset } from "../utils/api";
import pagesStyle from "./pages.module.css"
import { useFormAndValidation } from "../hooks/useFormAndValidation";


function ForgotPassword() {
  const navigate = useNavigate();
  const {values, handleChange, errors} = useFormAndValidation();

  const onResetClick = (e:React.FormEvent) => {
    e.preventDefault();
    postPasswordReset(values['email'])
      .then(req => {
        if (req.success) {
          navigate('/reset-password', { replace: true });
        }
      });
  }
  return (
    <div className={pagesStyle.content}>
      <p className="text text_type_main-medium">
        Восстановление пароля
      </p>
      <form className={pagesStyle.form} onSubmit={onResetClick}>
        <Input
          type="email"
          onChange={handleChange}
          value={values['email']??""}
          name={'email'}
          placeholder="E-mail"
          extraClass="mb-2"
          errorText={errors['email']??""}
        />
        <Button htmlType="submit" type="primary" size="medium" extraClass={pagesStyle.button}>
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

export default ForgotPassword;