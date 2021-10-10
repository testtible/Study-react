import React from 'react';
import ShowCard from '../show_card/show_card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {cards.map(el => <ShowCard card={el}/>)}
    </section>
  );
};

export default Preview;