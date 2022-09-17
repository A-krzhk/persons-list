import styles from "./PersonList.module.css"
import PersonListItem from "./PersonListItem";

const PersonList = (props) => {
    return (
        <div className={styles['persons-wrapper']}>
            <ul>
                {props.persons.map(person => 
                    <PersonListItem name={person.name} age={person.age} key={person.key}/>
                )}    
            </ul>
        </div>
    );
};

export default PersonList;