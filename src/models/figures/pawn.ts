import { Colors, ICell } from "../model-cell";
import { Figure, FigureNames, IFigure } from "../model-figure";
import bIcon from "@/assets/figure-icons/b-pawn.svg"
import wIcon from "@/assets/figure-icons/w-pawn.svg"

interface IPawn extends IFigure {
    isFirstStep : boolean
}

export class Pawn extends Figure implements IPawn { 

    isFirstStep = true;

    constructor (color: Colors, cell: ICell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? bIcon : wIcon;
        this.name = FigureNames.PAWN;
    } 

    public checkMove(cell: ICell) {
        if(!super.checkMove(cell)) return false;

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((cell.y === this.cell.y + direction || this.isFirstStep
            && (cell.y === this.cell.y + firstStepDirection))
            && cell.x === this.cell.x
            && this.cell.board.getCell(cell.x, cell.y).checkCell()
            && this.cell.board.getCell(this.cell.x, this.cell.y + direction).checkCell()
        ) {
          return true;
        }

        if(cell.y === this.cell.y + direction
        && (cell.x === this.cell.x + 1 || cell.x === this.cell.x - 1)
        && this.cell.checkEnemy(cell)) {
          return true;
        }

        return false
    }

    move(cell: ICell) {
        super.move(cell);
        this.isFirstStep ? this.isFirstStep = false : null
    }
}