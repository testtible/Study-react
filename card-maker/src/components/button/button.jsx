import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({name, onButtonClick}) => {
  return (
    <button className={styles.button} onClick={onButtonClick} >{name}</button>
  );
});

export default Button;