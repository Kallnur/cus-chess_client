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
    color: string
}

export class Figure implements IFigure {
    cell: ICell;
    // toSteps: Cell[];
    // isLive: boolean;
    name: string;
    icon: string | null;
    id: number;
    color: string

    constructor (color: Colors, cell: ICell) {
        this.cell = cell;
        // this.isLive = isLive;
        this.name = "";
        this.cell.figure = this;
        this.id = Math.random();
        this.icon = null;
        this.color = color;
    }

    chackMove (cell: ICell) {
        return true
    }

    move(cell: ICell) {

    }

}