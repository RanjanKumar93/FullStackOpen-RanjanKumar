const CourseInfo = ({ courseName, partsName }) => <>
  <h1>{courseName}</h1>
  {partsName}
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <> <CourseInfo courseName={course.name} partsName={course.parts.map((x) => <p key={x.id}>{x.name} {x.exercises}</p>)} />
      <h3>total of {course.parts.reduce((sum, course) => sum + course.exercises, 0)} exercises</h3>
    </>
  )
}

export default App