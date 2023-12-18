const CourseParts = ({ partsName }) => <>{partsName}</>

const Course = ({ courseName, partsName }) => <>
  <h1>{courseName}</h1>
  <CourseParts partsName={partsName} />
</>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course courseName={course.name} partsName={course.parts.map((x) => <p key={x.id}>{x.name} {x.exercises}</p>)} />
}

export default App