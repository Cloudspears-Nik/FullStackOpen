const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <p>{props.part1} {props.excercises1}</p>
      <p>{props.part2} {props.excercises2}</p>
      <p>{props.part3} {props.excercises3}</p>
    </>
  )
}

const Totals = (props) => {

  return (
    <>
      <p>Number of excercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header courseName={course}/>
      <Content part1={part1} excercises1={exercises1} part2={part2} excercises2={exercises2} part3={part3} excercises3={exercises3}/>
      <Totals exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App