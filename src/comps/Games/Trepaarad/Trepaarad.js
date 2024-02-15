import React, {useState} from 'react'

const Trepaarad = () => {
  
  const [winner,setWinner] = useState('')
  const [grid, setGrid] = useState([
    { id: 1, color: null},
    { id: 2, color: null},
    { id: 3, color: null},
    { id: 4, color: null},
    { id: 5, color: null},
    { id: 6, color: null},
    { id: 7, color: null},
    { id: 8, color: null},
    { id: 9, color: null}
  ])

  const winCombo = [
    [1,2,3],[4,5,6],[7,8,9], //vannrett
    [1,4,7],[2,5,8],[3,6,9], //loddrett
    [1,5,9],[3,5,7]          //diagonal
  ]

  const translate = (farge) => {
    let winner = ''
    if (farge === 'red'){
      winner = 'Rød vant!'
    } else if (farge === 'blue'){
      winner = 'Blå vant!'
    }
    return winner
  }

  const resetGame = () => {
    const resetGrid = grid.map(item => ({...item, color: null}))
      setTimeout(() => {
      setWinner('')
      setGrid(resetGrid)
    }, 2000)
  }

  const checkWinner = () => {
    for(let combo of winCombo){
      let [a,b,c] = combo
      let colorA = grid.find(item => item.id === a)?.color
      let colorB = grid.find(item => item.id === b)?.color
      let colorC = grid.find(item => item.id === c)?.color
      if (colorA && colorA === colorB && colorB === colorC){
        setWinner(translate(colorA))
        return resetGame()      
      }
    }
    const hasNullValue = grid.some(item => Object.values(item).includes(null))
    if (!hasNullValue){
      setWinner('Uavgjort!')
      resetGame()
    } 
  }
  
  const aiMove = () => {
    let newGrid = [...grid]
    let filteredGrid = newGrid.filter(element => element.color !== 'red' && element.color !== 'blue')
    if (filteredGrid.length === 0 ){
      return;
    }
    let random = Math.floor(Math.random() * filteredGrid.length)
    let randomElement = filteredGrid[random]
    randomElement.color = 'blue'
    setGrid(newGrid)
  }

  const handleClick = (clickedObject) => {
    const updatedGrid = [...grid]
    if (clickedObject.color !== 'red' && clickedObject.color !== 'blue') {
    clickedObject.color = 'red';
    setGrid(updatedGrid)
    aiMove()
    checkWinner();
    }
  }

  return (
    <div className='games'>
      <h1>3 på rad</h1>
      <div className='gamegrid'>
        {grid.map((window, id) => (
          <div 
            style={{backgroundColor: window.color}} 
            onClick={() => handleClick(window)} 
            className='griditem' key={id}>
          </div>
        ))}
      </div>
      <h1>{winner}</h1>
    </div>
  )
}

export default Trepaarad