import React, {useState} from 'react'

const Trepaarad = () => {

  const [grid, setGrid] = useState([
    { id: 1, content: ''},
    { id: 2, content: ''},
    { id: 3, content: ''},
    { id: 4, content: ''},
    { id: 5, content: ''},
    { id: 6, content: ''},
    { id: 7, content: ''},
    { id: 8, content: ''},
    { id: 9, content: ''}
  ])

    const aiMove = () => {
      let newGrid = [...grid]
      let filteredGrid = newGrid.filter(element => element.content !== 'red' && element.content !== 'blue')
      if (filteredGrid.length === 0 ){
        return;
      }
      let random = Math.floor(Math.random() * filteredGrid.length)
      let randomElement = filteredGrid[random]
      randomElement.content = 'blue'
      setGrid(newGrid)
    }

    const handleClick = (id) => {
    const updatedGrid = [...grid]
    const clickedItem = grid.find(item => item.id === id)
    if (clickedItem.content !== 'red' && clickedItem.content !== 'blue') {
      clickedItem.content = 'red';
      setGrid(updatedGrid)

      aiMove()
     }
    }


// 123
// 456
// 789

  return (
    <div className='games'>
      <h1>3 på rad</h1>
      <div className='gamegrid'>
        {grid.map((window, id) => (
          <div 
            style={{backgroundColor: window.content}} 
            onClick={() => handleClick(window.id)} 
            className='griditem' key={id}>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trepaarad