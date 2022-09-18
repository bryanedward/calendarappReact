import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { RegisterLogin, starLogin } from "../../actions/auth";
import { UseForms } from "../../hooks/UseForms";
import "./style.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [handleValue, value] = UseForms({
    email: "brian@gmail.com",
    password: "brian",
  });
  const [handleValueRegister, valueRegister] = UseForms({
    nameRegister: "karl",
    emailRegister: "karla@gmail.com",
    passRegister: "karla",
  });
  const { email, password } = value;
  const { nameRegister, emailRegister, passRegister } = valueRegister;

  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(starLogin(email, password));
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    if (
      nameRegister.trim() !== "" &&
      emailRegister.trim() !== "" &&
      passRegister.trim() !== ""
    ) {
      dispatch(RegisterLogin(nameRegister, emailRegister, passRegister));
    } else {
      Swal.fire({
        icon: "error",
        title: "Completar datos",
        text: "vuelva intentar",
      });
    }
  };

  return (
    <div className="loginscreen">
      <div className="screen__form">
        <div className="screen__register">
          <h4>Ingreso</h4>
          <form action="" className="form__screen" onSubmit={onSubmitLogin}>
            <input
              type="email"
              placeholder="correo"
              name="email"
              value={email}
              onChange={handleValue}
            />
            <input
              type="password"
              placeholder="contraseña"
              name="password"
              value={password}
              onChange={handleValue}
            />
            <button type="submit">Acceder</button>
          </form>
        </div>
        <div className="screen__login">
          <h4>Registro</h4>
          <form action="" className="form__screen" onSubmit={onSubmitRegister}>
            <input
              type="text"
              placeholder="nombre"
              name="nameRegister"
              onChange={handleValueRegister}
              value={nameRegister}
            />
            <input
              type="email"
              placeholder="correo"
              name="emailRegister"
              onChange={handleValueRegister}
              value={emailRegister}
            />
            <input
              type="password"
              placeholder="contraseña"
              name="passRegister"
              onChange={handleValueRegister}
              value={passRegister}
            />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
