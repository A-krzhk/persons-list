import "./PersonListItem.css";

const PersonListItem = (props) => {
    return (
        <li>
            {props.name} {props.age}
            <hr/>
        </li>
    );
}

export default PersonListItem;