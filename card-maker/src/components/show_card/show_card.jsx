import React from 'react';
import styles from './show_card.module.css';

const ShowCard = ({card}) => {
  const url = card.fileURL || "/images/default_logo.png"; 
  return (
    <section className={`${styles.card} ${getColor(card.color)}`}>
      <img className={styles.avatar} src={url} alt="person"/>
      <ul className={styles.card_list}>
        <li className={styles.name}>{card.name}</li>
        <li className={styles.company}>{card.company}</li>
        <li className={styles.job}>{card.job}</li>
        <li className={styles.email}>{card.email}</li>
        <li className={styles.text}>{card.text}</li>
      </ul>
    </section>
  );
};

function getColor(color) {
  switch(color) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown color: ${color}`);
  }
}

export default ShowCard;