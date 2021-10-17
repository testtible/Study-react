import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Home = ({authService, FileInput, cardRepository}) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [ cards, setCards ] = useState({});
  const [ userId, setUserId ] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    if(!userId) {
      return ;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    
    return () => stopSync();
  }, [userId, cardRepository])

  useEffect(() => {
    authService.onAuthChanged(user => {
      if(user) {
        setUserId(user.uid);
      }else {
        history.push('/');
      }
    })
  }, [authService, history])

  const createOrUpdateCard = (card) => {
    const update = {...cards};
    update[card.id] = card;
    setCards(update);
    cardRepository.saveCard(userId, card);
  }

  const deleteCard = (id) => {
    setCards(cards => {
      const patchObj = {...cards};
      delete patchObj[id];
      return patchObj;
    })
    cardRepository.removeCard(userId, id);
  }

  return (
    <section className={styles.home}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCardInfo={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} FileInput={FileInput} />
      </div>
      <Footer />
    </section>
  );
}

export default Home;

// onLogout func이 전달됨.
// editor 편집자 edit 편집하다