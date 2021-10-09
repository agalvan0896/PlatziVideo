import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../redux/actions";
import classNames from "classnames";

const Header = ({ user, logoutRequest, isLogin, isRegister }) => {
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    logoutRequest({});
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser && <img src={gravatar(user.email)} alt={user.email} />}
          {!hasUser && <img src={userIcon} alt="" />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <a href="/">{user.name}</a>
            </li>
          )}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogOut}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest: logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
