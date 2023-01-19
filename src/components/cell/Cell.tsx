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
  const canHitClass = cell.available && cell.figure ? classes.canHit : "";

  return (
    <div 
      className={[classes.cell, bgColor, selectedClass, canHitClass].join(" ")}
      onClick={() => selectCell(cell)}
    >
      {
        cell.available && !cell.figure 
        ? <div className={classes.available}></div> 
        : null 
      }
      {
        cell.figure?.icon 
        ? <img src={cell.figure.icon} draggable="false" alt="" />
        : null
      }
    </div>
  )
}

export default Cell