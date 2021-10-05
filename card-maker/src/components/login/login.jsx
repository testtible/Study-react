import { useHistory } from 'react-router-dom';
import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
const Login = ({authService}) => {
  const history = useHistory();

  const goToHome = (userId) => {
    history.push({
      pathname: '/home',
      state: {
        id: userId,
      }
    });  
  }

  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent)
    .then(data => {
      goToHome(data.user.uid);
    });
  }

  useEffect(() => {
    authService.onAuthChanged(user => {
      user && goToHome(user.uid);
    })
  })

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
