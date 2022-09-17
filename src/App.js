import PersonList from "./components/PersonsList/PersonList";
import Form from "./components/Form/Form";
import './App.css';
import React, { useState } from "react";

const INITIAL_PERSONS = [
  {
    name: 'John',
    age: 17,
    key: 12348233
  },
  {
    name: 'Alis',
    age: 35,
    key: 123482247
  },
  {
    name: 'Mark',
    age: 64,
    key: 22338264
  }
];

const App = () => {
  
  const [persons, setPersons] = useState(INITIAL_PERSONS);

  const addNewPerson = (personData) => {
    setPersons(prev => {
      return [personData, ...prev];
    })
  };

  return (
    <div className="wrapper">
      <Form onSubmitHandler={addNewPerson}/>
      <PersonList persons = {persons} />
    </div>
  );
}

export default App;
