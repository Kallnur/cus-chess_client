import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-queen.svg"
import wIcon from "@/assets/figure-icons/w-queen.svg"

export class Queen extends Figure {  

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        console.log(this.icon);
        this.name = FigureNames.QUEEN;
    }

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;
        return true
    }

}