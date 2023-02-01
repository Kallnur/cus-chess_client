import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-king.svg"
import wIcon from "@/assets/figure-icons/w-king.svg"

export class King extends Figure {  

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        this.name = FigureNames.KING;
    }

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;

        if((Math.abs(cell.y - this.cell.y) <= 1 && Math.abs(cell.x - this.cell.x) <= 1)) {
            return true
        };

        return false
    }
}