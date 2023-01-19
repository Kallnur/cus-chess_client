import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-rook.svg"
import wIcon from "@/assets/figure-icons/w-rook.svg"

export class Rook extends Figure {  

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        this.name = FigureNames.ROOK;
    }

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;
        
        if(this.cell.checkXLine(cell)) return true
        if(this.cell.checkYLine(cell)) return true

        return false
    }
}