import React, { useState } from 'react';
import styles from './editor.module.css';
import MakeCard from '../make_card/make_card';
import AddCard from '../add_card/add_card';
const Editor = ({cards, addCardInfo}) => {
  
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(el => {
        return <MakeCard key={el.id} card={el} />
      })}
      <AddCard addCardInfo={addCardInfo}/>
    </section>
  );
};

export default Editor;