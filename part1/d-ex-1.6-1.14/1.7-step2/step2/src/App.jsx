import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodPlusOne = () => setGood(good + 1)
  const neutralPlusOne = () => setNeutral(neutral + 1)
  const badPlusOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodPlusOne} text='good' />
      <Button onClick={neutralPlusOne} text='neutral' />
      <Button onClick={badPlusOne} text='bad' />
      <h1>statistics</h1>
      <p style={{ marginBottom: '-15px' }}>good {good}</p>
      <p style={{ marginBottom: '-15px' }}>neutral {neutral}</p>
      <p style={{ marginBottom: '-15px' }}>bad {bad}</p>
      <p style={{ marginBottom: '-15px' }}>all {good + neutral + bad}</p>
      <p style={{ marginBottom: '-15px' }}>average {(good - bad)/(good + bad + neutral)}</p>
      <p>positive {(good * 100)/(good + bad + neutral)} %</p>
    </div>
  )
}

export default App