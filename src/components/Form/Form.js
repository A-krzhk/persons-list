import styles from "./Form.module.css";
import React, { useState } from "react";

const Form = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const nameInputHandler = (e) => {
        setInputName(e.target.value)
    }

    const ageInputHandler = (e) => {
        setInputAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const personData = {
            name: inputName,
            age: inputAge,
            key: Date.now()
        };
        props.onSubmitHandler(personData);
    }

    return (
        <form className={styles['form']} onSubmit={submitHandler}>
            <input type="text" placeholder="Введите имя" onChange={nameInputHandler}/>
            <input type="number" placeholder="Введите возраст" onChange={ageInputHandler}/>
            <button type="submit"> Добавить </button> 
        </form>
    );
}

export default Form;