import React, { useState } from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({ handleClickSearch }) => {
  const [ inputText, setInputText ] = useState("");
  
  const handleInputValue = (e) => {
    setInputText(e.target.value);
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleClickSearch(inputText);  
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.logo} onClick={() => window.location.reload()}>
        <i id={styles.youtube_logo} className="fab fa-youtube"></i>
        <div className={styles.name}>Youtube</div>
      </div>
      <div className={styles.search}>
        <input 
          className={styles.search_text} 
          placeholder="Search" 
          type="text"
          onChange={handleInputValue}
          onKeyPress={onKeyPress}/>
        <button className={styles.search_button} onClick={() => handleClickSearch(inputText)}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
