import personService from "./services/persons";
import { useState } from "react";
import axios from "axios";

const Filter = ({ search, handleSearch }) => {
  return (
    <form>
      <div>
        filter shown with{" "}
        <input value={search} placeholder="Search..." onChange={handleSearch} />
      </div>
    </form>
  );
};

const PersonForm = ({
  submit,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={submit}>
      <div>
        name:{" "}
        <input value={newName} placeholder="name..." onChange={handleNewName} />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          placeholder="number..."
          onChange={handleNewNumber}
        />
      </div>
      <div>
        <button style={{ borderRadius: "5px" }} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

const Persons = ({ filteredData }) => {
  let show;
  if (filteredData.length === 0) {
    show = <p>nope......</p>;
  } else {
    show = filteredData.map((x) => (
      <p style={{ marginBottom: "-13px" }} key={x.id}>
        {x.name} {x.number}
      </p>
    ));
  }
  return <>{show}</>;
};

const App = ({ initialData }) => {
  const [persons, setPersons] = useState([...initialData]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
    };

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newNameObject.name) {
        return alert(`${newName} is already added to phonebook`);
      }
    }

    personService.create(newNameObject).then((x) => {
      setPersons(persons.concat(x.data));
      setNewName("");
    });
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchPattern = new RegExp(search, "i");
  const filteredData = persons.filter((y) => searchPattern.test(y.name));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm
        submit={submit}
        newName={newName}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} />
    </div>
  );
};

export default App;
