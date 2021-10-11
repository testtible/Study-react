import React from 'react';
import styles from './button.module.css';

const Button = ({name, onButtonClick, id}) => {
  return (
    <button className={styles.button} onClick={onButtonClick} >{name}</button>
  );
};

export default Button;