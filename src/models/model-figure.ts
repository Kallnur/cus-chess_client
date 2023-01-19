import { Colors, ICell } from "./model-cell";

export enum FigureNames {
    KING = "king",
    QUEEN = "queen",
    BISHOP = "bishop",
    KNIGHT = "knight",
    ROOK = "rook",
    PAWN = "pawn",
}

export interface IFigure {
    cell: ICell;
    // toSteps: Cell[];
    // isLive: boolean;
    name: string;
    icon: string | null;
    id: number;
    color: string;
    checkMove: (cell: ICell) => boolean;
    move: (cell: ICell) => void
}

export class Figure implements IFigure {
    cell: ICell;
    // toSteps: Cell[];
    // isLive: boolean;
    name: string;
    icon: string | null;
    id: number;
    color: string;

    constructor (color: Colors, cell: ICell) {
        this.cell = cell;
        // this.isLive = isLive;
        this.name = "";
        this.cell.figure = this;
        this.id = Math.random();
        this.icon = null;
        this.color = color;
    }

    public checkMove (cell: ICell) {
        if(cell.figure?.color === this.color ) return false;
        if(cell.figure?.name === FigureNames.KING) return false;
        return true
    }

    move(cell: ICell) {
    }

}