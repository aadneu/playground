import React, { useEffect, useState } from 'react'

const Snake = () => {
    


    const [grid, setGrid] = useState([])
    const [intervalId, setIntervalId] = useState('');
    const [direction, setDirection] = useState('')
    const [tummyContent, setTummyContent] = useState([])
    const [delay, setDelay] = useState(0)  
    const [sessionScore, setSessionScore] = useState([])
  

    const snake = "\u{1F40D}"
    const food = "\u{1F34E}"
    const tail = '🟢'
    const gamespeed = 100
    
    const size = 20; // størrelse på grid, endrer også move funksjoner til å stemme
    const randnumb = () => {return Math.floor(Math.random() * size)} 
    
    //INITIALISERING AV GRID, SLANGE OG MAT
    const createGrid = () => {
        let gridArray = []
        for(let i = 0;i < size;i++ ){
            const row = [];
            for (let j = 0; j < size; j++){
                row.push({
                    id: `${i}-${j}`,
                    row: j ,
                    col: i ,
                    content: null,
                    removeContent: function(delay) {
                        setTimeout(() => {
                            this.content = null;
                        }, delay)
                    }
                })
            }
            gridArray.push(row)
        }
        return gridArray
    }

    const initializeGame = () => {
        let initialGrid = (createGrid())
        initialGrid[randnumb()][randnumb()].content = snake
        initialGrid[randnumb()][randnumb()].content = food
        setGrid(initialGrid)
    }
    useEffect(() => {
        initializeGame();
    }, []);


    // FUNKSJON FOR Å LOKALISERE .CONTENT I GRID
    const findElement = (element) => {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].content === element) {
                    // console.log({ row: j, col: i })
                    return { row: j, col: i };
                }
            }
        }
        return null;
    };

    //TESTKNAPP FOR EVENTUELLE NYE FUNKSJONER
    const testFunction = () => {
        let score = tummyContent.length
        if (score > 5){
            setSessionScore(prevSessionScore => [...prevSessionScore, score])
        }
        
        handleClick('')
        setTummyContent([])
        setDelay(0)
        initializeGame();
        }

    //OPPDATER MAGEINNHOLD OG GENERER NY MAT, OG SETTE DELAY PÅ REMOVE CELLE-CONTENT
    const eatFood = () => {
        let foodIndex = findElement(food)
        if(!foodIndex) {
            setTummyContent(prevTummyContent => [...prevTummyContent, food])
            setDelay(delay + gamespeed)
            generateFood();
        }
    }

    const generateFood = () => {
        let newGrid = [...grid]
        let x, y;
        do {
            x = randnumb();
            y = randnumb();
        } while (newGrid[x][y].content !== null);
         
        newGrid[x][y].content = food;
        setGrid(newGrid)
    }

  
     // ALT NEDENFOR HER HAR MED BEVEGELSE AV SLANGEN Å GJØRE
     // STARTGAME TAR INN EN RETNING SOM PARAMETER OG KJØRES I HANDLECLICK-FUNKSJONEN
  

    const handleClick = (direction) => {
        startGame(() => moveSnake(direction));
    }

    const startGame = (moveFunction) => {
       
        clearInterval(intervalId)
        let id = setInterval(() => {
             moveFunction()
             eatFood();
         }, gamespeed)
         setIntervalId(id)  
        
    }
    
    const moveSnake = (direction) => {
        const snakePos = findElement(snake);
        const newGrid = [...grid];
        
        if (snakePos === null) {
            // setGameOver('Game Over: Error');
            clearInterval(intervalId)
            return;
        }
        
        let newRow, newCol;
        if (direction === 'up') {
            newRow = snakePos.row > 0 ? snakePos.row - 1 : size - 1;
            newCol = snakePos.col;
        } else if (direction === 'down') {
            newRow = (snakePos.row + 1) % size;
            newCol = snakePos.col;
        } else if (direction === 'left') {
            newRow = snakePos.row;
            newCol = snakePos.col > 0 ? snakePos.col - 1 : size - 1;
        } else if (direction === 'right') {
            newRow = snakePos.row;
            newCol = (snakePos.col + 1) % size;
        } else {
            newRow = snakePos.row;
            newCol = snakePos.col;
        }
        
        grid[snakePos.col][snakePos.row].removeContent(delay);
        grid[snakePos.col][snakePos.row].content = tail;   
        
        if(newGrid[newCol][newRow].content === tail){
            // setGameOver('Game Over: cant eat tail...')
            
            clearInterval(intervalId)
            return
        }
        newGrid[newCol][newRow].content = snake;
     
        setDirection(direction);
        setGrid(newGrid);
    }

    const showButtons = () => {
        return (
            <div>
                <button onClick={() => handleClick('up')} disabled={direction==='down'}>up</button> <br />
                <button onClick={() => handleClick('left')} disabled={direction==='right'}>left</button>
                <button onClick={() => handleClick('right')} disabled={direction==='left'}>right</button> <br />
                <button onClick={() => handleClick('down')} disabled={direction==='up'}>down</button>
            </div>
        )
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown'){
            event.preventDefault();
            handleClick('down')
        } else if (event.key === 'ArrowUp'){
            event.preventDefault();
            handleClick('up')
        } else if (event.key === 'ArrowLeft'){
            handleClick('left')
        } else if (event.key === 'ArrowRight'){
            handleClick('right')
        }
    }
    
    const sortedScores = sessionScore.slice().sort((a, b) => b - a);

  return (
    <div className='container-lg '>

        <div className='row text-center justify-content-center'>
                    <h1>Worm</h1>
                    <div>
                        <button onClick={testFunction} className="btn btn-success btn-sm my-1">RESET</button> <br />
                    </div>
                    
                    {showButtons()}
            
            <div className='col-12 col-md-8 d-flex justify-content-center'>
          
        
                {/* <div className='games' > */}

                    <div className='grid' tabIndex="0" onKeyDown={handleKeyDown}>
                        {grid.map((row, rowIndex) => (
                            <div key={rowIndex} className="rad">
                                {row.map((cell) => (
                                    <div className='cell' key={cell.id}>
                                        {cell.content} 
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <br/>
                {/* </div> */}
            </div>
                    <h3>Apples eaten: {tummyContent.length}</h3>
                    Session score: 
                    <div>
                        <ul>
                            {sortedScores.map((score, index) => (
                                <li key={index}>{score}</li>
                            ))}
                        </ul>         
                    </div>               
        </div>
    </div>
  )
}

export default Snake