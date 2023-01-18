import { IBoard } from '@/models/model-board';
import { ICell } from '@/models/model-cell';
import { useState } from 'react';
import { Fragment } from 'react';
import Cell from '../cell/Cell';
import classes from "./style.module.scss"

interface Props {
  board: IBoard
}

const Board = ({board}: Props) => {

  const [selectedCell, setSelectedCell] = useState<ICell | null>(null)

  const selectCell = (cell: ICell) => {
    if(cell.figure) setSelectedCell(cell)
    else setSelectedCell(null)
  }

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