import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('a new name...')

  const submit = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      id: newName
    }
    setPersons(persons.concat(newNameObject))
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submit} >
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button style={{borderRadius: '5px'}} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((x) => <p style={{marginBottom: '-15px'}} key={x.id}>{x.name}</p>)}
    </div>
  )
}

export default App