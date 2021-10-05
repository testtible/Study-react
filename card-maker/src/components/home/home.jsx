import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Home = ({authService}) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChanged(user => {
      if(!user) {
        history.push('/');
      }
    })
  })

  return (
    <section className={styles.home}>
      <Header onLogout={onLogout}/>

      <Footer />
    </section>
  )
}

export default Home;

// onLogout func이 전달됨.