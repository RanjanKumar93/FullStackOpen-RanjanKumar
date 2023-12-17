import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.goodOnClick}>good</button>
      <button onClick={props.neutralOnClick}>neutral</button>
      <button onClick={props.badOnClick}>bad</button>
    </>
  )
}

const StatisticLine = ({ text, value, text2 }) =>
  <table>
    <tbody>
      <tr>
        <th style={{ textAlign: 'left', width: '53px', fontWeight: 'normal' }}>{text}</th>
        <td style={{ textAlign: 'left', }}>{value}</td>
        <td style={{ textAlign: 'left', }}>{text2}</td>
      </tr>
    </tbody>
  </table>


const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text='positive' text2='%' value={(good * 100) / (good + bad + neutral)} />
      </>
    )
  }
}

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
      <Button goodOnClick={goodPlusOne} badOnClick={badPlusOne} neutralOnClick={neutralPlusOne} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App