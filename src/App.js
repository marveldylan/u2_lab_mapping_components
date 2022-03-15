import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import contacts from "./data/contacts.json"



console.log(contacts.results)

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Contacts contacts={ contacts.results }>

      </Contacts>
    </div>
  );
}

export default App;
