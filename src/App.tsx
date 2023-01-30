import { useState } from 'react'
import { useEffect } from 'react'
import {  } from 'react'
import './App.scss'
import Board from './components/board/Board'
import { IBoard, ModelBoard } from './models/model-board'
import { Colors } from './models/model-cell'
import { IPlayer, Player } from './models/model-player'

function App() {

  const [board, setBoard] = useState<IBoard>(new ModelBoard())
  const [whitePlayer, setWhitePlayer] = useState<IPlayer>(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<IPlayer>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPLayer] = useState<IPlayer | null>(null)

  const initBoard = () => { 
    const newBoard = new ModelBoard();
    newBoard.initCells();
    newBoard.lineUpFigures();
    setBoard(newBoard)
  }

  const swapPlayer = () => {
    setCurrentPLayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  useEffect(() => {
    initBoard()
    setCurrentPLayer(whitePlayer);
  }, [])

  return (
    <div className="App">
      <div className='wrapper'>
        <Board 
          board={board} 
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
      </div>
    </div>
  )
}

export default App
