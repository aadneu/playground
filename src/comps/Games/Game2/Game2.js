import React from 'react'
import {useState, useEffect} from 'react'

const Game2 = () => {

  
  const [array, setArray] = useState([])
  const [aliveSnake, setAliveSnake] = useState(true)
  // const [direction, setDirection] = useState(() => movePlayerDown)
  const snake = "\u{1F40D}"
  const food = "\u{1F34E}"
  
    const createGrid = (numOfObjects) => {
    const gridArray = []
    for (let i = 0; i < numOfObjects; i++){
      gridArray.push({
        id: i+1,
        content: null
      })
    }
    return gridArray
  }
  
    const findSnake = () => {
    const Arr = [...array]
    const snakeIndex = Arr.findIndex(cell => cell.content === snake)
    return snakeIndex
  }
  useEffect(() => {
    const initialGrid = (createGrid(225))
    initialGrid[ Math.floor(Math.random() * 226)].content = snake
    initialGrid[ Math.floor(Math.random() * 226)].content = food
    setArray(initialGrid)
   
  }, []);

  // const dynamicMovement = () => {
  //   const intervalId = setInterval(() => {
  //     if (aliveSnake) {
  //       movePlayerDown()
  //     } else {
  //       clearInterval(intervalId); // Stop the interval if snake is not alive
  //     }
  //   }, 1000); // 1000 milliseconds = 1 second
  // }
  
  const movePlayerDown = () => {
    let index = findSnake()
    const Arr = [...array]
      Arr[index].content = null
      index += 15       
      if (index >= Arr.length){
        index -= 225
      } 
      Arr[index].content = snake
      setArray(Arr)
    }
  const movePlayerUp = () => {
    let index = findSnake()
    const Arr = [...array]
      Arr[index].content = null
      index -= 15       
      if (index < 0){
        index += 225
      } 
      Arr[index].content = snake
      setArray(Arr)
  }
  const movePlayerLeft = () => {
    let index = findSnake()
    const Arr = [...array]
      Arr[index].content = null
      index -= 1       
      if (index % 15 === 14 || index < 0) {
        index += 15; 
      }
      Arr[index].content = snake
      setArray(Arr)
  }
  const movePlayerRight = () => {
    let index = findSnake()
    const Arr = [...array]
      Arr[index].content = null
      index += 1       
      if (index % 15 === 0 || index >= 225) {
        index -= 15; // Subtract 15 to wrap around to the leftmost column
      }
      Arr[index].content = snake
      setArray(Arr)
  }
  

  
  return (
    <div className='games'>
      <h1>Game 2</h1>
      <div className='game2buttons'>
        <button onClick={movePlayerUp}>up</button><br />
        <button onClick={movePlayerLeft}>left</button>
        <button onClick={movePlayerRight}>right</button><br />
        <button onClick={movePlayerDown}>down</button>
        {/* <button onClick={setDirection(movePlayerUp)}>up</button><br />
        <button onClick={setDirection(movePlayerLeft)}>left</button>
        <button onClick={setDirection(movePlayerRight)}>right</button><br />
        <button onClick={setDirection(movePlayerDown)}>down</button> */}
      </div>
      
      <div className='game2grid'>
        {array.map((cell, id) => (
          <div className='game2cell' key={cell.id}>{cell.content}</div>
        ))}
        
      </div>
    </div>
  )
}

export default Game2