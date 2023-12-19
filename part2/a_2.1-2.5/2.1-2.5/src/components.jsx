const Course = ({ course }) => {
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
              <h3>total of {x.parts.reduce((sum, parts) => sum + parts.exercises, 0)} exercises</h3>
            </div >
          )
        })}
      </div>
    )
  }

  export default Course