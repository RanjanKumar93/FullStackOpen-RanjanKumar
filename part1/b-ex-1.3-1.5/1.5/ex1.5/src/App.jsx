const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.p1} {props.e1}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part p1={props.p1} e1={props.e1} />
      <Part p1={props.p2} e1={props.e2} />
      <Part p1={props.p3} e1={props.e3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content p1={course.parts[0]['name']} p2={course['parts'][1].name} p3={course.parts[2].name} e1={course.parts[0]['exercises']} e2={course['parts'][1]['exercises']} e3={course.parts[2].exercises} />
      <Total e1={course.parts[0]['exercises']} e2={course['parts'][1]['exercises']} e3={course.parts[2].exercises} />
    </>
  )
}

export default App