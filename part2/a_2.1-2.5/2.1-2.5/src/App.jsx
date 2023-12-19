const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {course.map((x) => {
        return (
          <div key={x.id}>
            <h1>{x.name}</h1>
            {x.parts.map((y) => {
              return (
                <div key={y.id}>
                  <p>{y.name} {y.exercises}</p>
                </div>
              )
            })}
            <h3>total of {x.parts.reduce((sum, a) => sum + a.exercises, 0)} exercises</h3>
          </div >
        )
      })}
    </div>
  )
}

export default App
