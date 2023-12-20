import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('a new name...')
  const [newNumber, setNewNumber] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      id: newName,
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((x) => <p style={{ marginBottom: '-15px' }} key={x.id}>{x.name} {x.number}</p>)}
    </div>
  )
}

export default App