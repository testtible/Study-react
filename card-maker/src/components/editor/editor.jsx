import React, { useState } from 'react';
import styles from './editor.module.css';
import MakeCard from '../make_card/make_card';
import AddCard from '../add_card/add_card';
const Editor = ({cards, addCardInfo, updateCard, deleteCard}) => {
  
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => {
        return (
          <MakeCard
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        );
      })}
      <AddCard addCardInfo={addCardInfo}/>
    </section>
  );
};

export default Editor;