import { useState } from 'react'

const Filter = ({ search, handleSearch }) => {
  return (
    <form >
      <div>
        filter shown with <input value={search} onChange={handleSearch} />
      </div>
    </form>)
}

const PersonForm = ({ submit, newName, handleNewName, newNumber, handleNewNumber }) => {
  return (
    <form onSubmit={submit} >
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button style={{ borderRadius: '5px' }} type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ filteredData, persons }) => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        {filteredData.map((x) => <p style={{ marginBottom: '-17px' }} key={x.id}>{x.name} {x.number}</p>)}
      </div>
      {persons.map((x) => <p style={{ marginBottom: '-15px' }} key={x.id}>{x.name} {x.number}</p>)}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('a new name...')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('search...')
  const [filteredData, setFilteredData] = useState([])

  const submit = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newNameObject.name) {
        return alert(`${newName} is already added to phonebook`)
      }
    }

    setPersons(persons.concat(newNameObject))
    setNewNumber('')
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)

    const searchPattern = new RegExp(event.target.value, 'i')
    const filteredResult = persons.filter((y) => searchPattern.test(y.name))

    setFilteredData(filteredResult)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm submit={submit} newName={newName} handleNewName={handleNewName} handleNewNumber={handleNewNumber} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} filteredData={filteredData} />
    </div>
  )
}

export default App