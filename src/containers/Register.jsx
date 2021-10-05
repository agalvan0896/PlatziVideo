import React, { useState } from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
          />
          <input
            onChange={handleInput}
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
          />
          <input
            onChange={handleInput}
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
          />
          <button type="submit" className="button">
            Registrarme
          </button>
        </form>
        <Link to="login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
