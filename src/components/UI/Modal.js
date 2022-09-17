import Button from "./button";

import styles from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={styles['background']} onClick={props.onCloseModal}>
            <div className={styles['modal-window']}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Button onClick={props.onCloseModal}>Закрыть</Button>
            </div>
        </div>
    );
};

export default Modal;