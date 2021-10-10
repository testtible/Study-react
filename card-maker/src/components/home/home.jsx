import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Home = ({authService}) => {
  const [ cards, setCards ] = useState([{
    id: "1",
    name: "Hyuk Jae",
    company: "company",
    color: "dark",
    job: "software engineer",
    email: "gurwo10@naver.com",
    text: "fighting",
    fileName: "",
    fileURL: "",
  }, {
    id: "2",
    name: "Jong Mi",
    company: "SKT Company",
    color: "light",
    job: "teacher",
    email: "jongmi@naver.com",
    text: "strong",
    fileName: "",
    fileURL: "",
  }, {
    id: "3",
    name: "Oh Jin",
    company: "High School",
    color: "colorful",
    job: "teacher",
    email: "koj55555@naver.com",
    text: "strong man",
    fileName: "",
    fileURL: "",
  }]);

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
      <div className={styles.container}>
        <Editor cards={cards}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  )
}

export default Home;

// onLogout func이 전달됨.
// editor 편집자 edit 편집하다