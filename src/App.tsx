import { useState } from 'react'
import { useEffect } from 'react'
import {  } from 'react'
import './App.scss'
import Board from './components/board/Board'
import { IBoard, ModelBoard } from './models/model-board'

function App() {

  const [board, setBoard] = useState<IBoard>(new ModelBoard())

  const initBoard = () => {
    const newBoard = new ModelBoard();
    newBoard.initCells();
    setBoard(newBoard)
  }

  useEffect(() => {
    initBoard()
  }, [])

  return (
    <div className="App">
      <div className='wrapper'>
        <Board board={board}/>
      </div>
    </div>
  )
}

export default App
