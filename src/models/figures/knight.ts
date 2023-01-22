import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-knight.svg"
import wIcon from "@/assets/figure-icons/w-knight.svg"

export class Knight extends Figure {  

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        this.name = FigureNames.KNIGHT;
    }

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;
        const dx = Math.abs(this.cell.x - cell.x);
        const dy = Math.abs(this.cell.y - cell.y);

        return (dx === 1 && dy ===2) || (dy === 1 && dx === 2);
    }
}