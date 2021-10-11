import React, { useState } from "react";
import styles from "./make_card.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const MakeCard = ({ card, updateCard, deleteCard}) => {
  const {
    id, 
    name, 
    company, 
    color, 
    job, 
    email, 
    text, 
    fileName, 
    fileURL 
  } = card;

  const onChange = (e) => {
    if(e.currentTarget === null) {
      return ;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,  
    })
  }

  const onButtonClick = () => {
    deleteCard(id);
  }

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select className={styles.select} name="color" value={color} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="job" value={job} onChange={onChange}/>
      <input className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
      <textarea
        className={styles.textarea}
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onButtonClick={onButtonClick} id={id}/>
    </form>
  );
};
export default MakeCard;

// 처음부터 수정에 들어가고, 이 방법도 배우기.

//   <form className={styles.card}>
//   <div className={styles.intro}>
//     <input type="text" name="name" placeholder="name" onChange={handleInputValue("name")}/>
//     <input type="text" name="company" placeholder="company" onChange={handleInputValue("company")}/>
// <select name="color" >
//   <option value="light">Light</option>
//   <option value="dark">Dark</option>
//   <option value="colorful">Colorful</option>
// </select>
//   </div>
//   <div className={styles.second_intro}>
//     <input type="text" name="job" placeholder="job" className={styles.job} onChange={handleInputValue("job")}/>
//     <input type="text" name="email" placeholder="email" className={styles.email} onChange={handleInputValue("email")}/>
//   </div>
//   <div>
//     <textarea className={styles.text} type="text" name="text" onChange={handleInputValue("text")}/>
//   </div>
//   <div className={styles.button_box}>
//     <button className={styles.imgBtn}>image</button>
//     <button className={styles.btn}>btn</button>
//   </div>
// </form>

// const [ info, setInfo ] = useState({
//   id: "",
//   name: "",
//   company: "",
//   color: "",
//   job: "",
//   email: "",
//   text: "",
//   fileName: "",
//   fileURL: "",
// });

// const handleInputValue = (key) => (e) => {
//   setInfo({
//     ...info,
//     [key]: e.target.value,
//   })
// } // study
