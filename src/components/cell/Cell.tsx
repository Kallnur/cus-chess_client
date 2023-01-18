import { Colors, ICell } from '@/models/model-cell';
import {} from 'react';
import classes from "./style.module.scss"

interface Props {
  cell: ICell;
  selectCell: (cell: ICell) => void;
  selected: boolean;
}

const Cell = ({cell, selectCell, selected}: Props) => {

  const bgColor = cell.color === Colors.BLACK ? classes.black : classes.white;
  const selectedClass = selected ? classes.selected : "";

  return (
    <div 
      className={[classes.cell, bgColor, selectedClass].join(" ")}
      onClick={() => selectCell(cell)}
    >
      {
        cell.figure?.icon 
        ? <img src={cell.figure.icon} draggable="false" alt="" />
        : null
      }
    </div>
  )
}

export default Cell