import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-pawn.svg"
import wIcon from "@/assets/figure-icons/w-pawn.svg"

export class Pawn extends Figure { 

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        this.name = FigureNames.PAWN;
    } 

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;
        return true
    }
}