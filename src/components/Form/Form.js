import React, { useState } from "react";

import styles from "./Form.module.css";
import Button from "../UI/button";
import Modal from "../UI/Modal";

const Form = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();

    const nameInputHandler = (e) => {
        setInputName(e.target.value)
    }

    const ageInputHandler = (e) => {
        setInputAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'Не все  поля заполнены!',
                description: 'Убедитесь, что вы заполнили оба поля для ввода.'
            })

            return;
        }
        if (+inputAge < 0) {
            setError({
                title: 'Некорректный ввод!',
                description: 'Возраст не может быть меньше нуля, введите корректные данные.'
            })

            return;
        } 
        const personData = {
            name: inputName,
            age: inputAge,
            key: Date.now()
        };
        props.onSubmitHandler(personData);

        setInputName('');
        setInputAge('');
    }

    const errorHandler = (event) => {

        event.currentTarget.stopPropagation()
        setError();
    }

    return (
        <form className={styles['form']} onSubmit={submitHandler}>
            <input type="text" placeholder="Введите имя" onChange={nameInputHandler} value={inputName} />
            <input type="number" placeholder="Введите возраст" onChange={ageInputHandler} value={inputAge} />
            <Button type="submit"> Добавить </Button> 

            {error && <Modal title={error.title} description={error.description} onCloseModal = {errorHandler} />}
        </form>
    );
}

export default Form;