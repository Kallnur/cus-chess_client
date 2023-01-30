import { IBoard } from '@/models/model-board';
import { ICell } from '@/models/model-cell';
import { IPlayer } from '@/models/model-player';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Cell from '../cell/Cell';
import classes from "./style.module.scss"

interface Props {
  board: IBoard;
  setBoard: (board: IBoard) => void;
  currentPlayer: IPlayer | null;
  swapPlayer: () => void;
}

const Board = ({board, setBoard, currentPlayer, swapPlayer}: Props) => {

  const [selectedCell, setSelectedCell] = useState<ICell | null>(null)

  const selectCell = (cell: ICell) => {

    if(selectedCell && selectedCell !== cell && selectedCell.figure?.checkMove(cell)){
      selectedCell.move(cell);
      swapPlayer();
      setSelectedCell(null)

    } else {
      if(cell.figure?.color === currentPlayer?.color) setSelectedCell(cell)
      
    }
  }

  const updateBoard = () => {
    const newBoard = board.getCopy();
    setBoard(newBoard);
  }

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard()
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell])

  return (
    <div className={classes.board}>
      {
        board.cells.map((row, i) => (
          <Fragment key={i}>
            {
              row.map(cell => (
                <Cell 
                  key={cell.id} 
                  cell={cell} 
                  selectCell={selectCell}
                  selected={selectedCell?.x === cell.x && selectedCell.y === cell.y}
                />
              ))
            }
          </Fragment>
        ))
      }
    </div>
  )
}

export default Board