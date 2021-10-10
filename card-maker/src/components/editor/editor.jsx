import React, { useState } from 'react';
import styles from './editor.module.css';
import MakeCard from '../make_card/make_card';

const Editor = ({cards}) => {
  
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(el => {
        return <MakeCard card={el} />
      })}
    </section>
  );
};

export default Editor;