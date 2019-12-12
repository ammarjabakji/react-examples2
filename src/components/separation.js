import React, { useState } from 'react'

function Button({ onClickFunction, increment }) {
  // we added () => for passing function by reference for parameters
  const handleClick = () => onClickFunction(increment)
  return <button onClick={handleClick}>+{increment}</button>
}

function Display(props) {
  return <div>counter is {props.message}</div>
}

export const Example2 = () => {
  const [counter, setCounter] = useState(0)
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue)

  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </>
  )
}
