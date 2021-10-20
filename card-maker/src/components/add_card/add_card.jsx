import React, { memo, useRef, useState } from 'react';
import styles from './add_card.module.css';
import Button from '../button/button';

const AddCard = memo(({addCardInfo, FileInput}) => {
  const [ count, setCount ] = useState("1");
  const [ fileInfo, setFileInfo ] = useState({});
  const nameRef = useRef();
  const companyRef = useRef();
  const colorRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const formRef = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    const card = {
      id: count,
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      color: colorRef.current.value || "",
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      text: textRef.current.value || "",
      fileName: fileInfo.name || "",
      fileURL: fileInfo.url || "",
    }
    const plusCount = Number(count) + 1;
    setCount(String(plusCount));
    addCardInfo(card);
    formRef.current.reset()
    setFileInfo({}); 
  }

  const onFileChange = (file) => {
    setFileInfo(file);      
  }

  return (
    <form className={styles.form} ref={formRef}>
      <input 
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input 
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select ref={colorRef} className={styles.select} name="color" placeholder="Color">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input 
        ref={jobRef}
        className={styles.input}
        type="text"
        name="job"
        placeholder="Job"
      />
      <input 
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea 
        ref={textRef}
        className={styles.textarea}
        type="text"
        name="text"
        placeholder="Textarea"
      />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={fileInfo.name}/>
      </div>
      <Button name="Add" onButtonClick={onButtonClick} />
    </form>
  );
});


export default AddCard;

// 처음부터 수정에 들어가고, 이 방법도 배우기.







//   <form className={styles.card}>
  //   <div className={styles.intro}>
  //     <input type="text" name="name" placeholder="name" onChange={handleInputValue("name")}/>
  //     <input type="text" name="company" placeholder="company" onChange={handleInputValue("company")}/>
      // <select name="color" >
      //   <option placeholder="light">Light</option>
      //   <option placeholder="dark">Dark</option>
      //   <option placeholder="colorful">Colorful</option>
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
  //     [key]: e.target.placeholder,
  //   })
  // } // study