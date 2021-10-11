import React from 'react';
import ShowCard from '../show_card/show_card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {Object.keys(cards).map((key) => (
        <ShowCard key={key} card={cards[key]} />
      ))}
    </section>
  );
};

export default Preview;