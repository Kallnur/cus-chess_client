import { Cell } from "./model-cell";

export enum FigureNames {
    KING = "king",
    QUEEN = "queen",
    BISHOP = "bishop",
    KNIGHT = "knight",
    ROOK = "rook",
    PAWN = "pawn",
}

export interface IFigure {
    cell: Cell;
    // toSteps: Cell[];
    isLive: boolean;
    name: string;
    icon: string | null;
    id: number;
    color: string
}

export class Figure implements IFigure {
    cell: Cell;
    // toSteps: Cell[];
    isLive: boolean;
    name: string;
    icon: string | null;
    id: number;
    color: string

    constructor (cell: Cell, name: string, isLive: boolean, icon: string, color: string) {
        this.cell = cell;
        this.isLive = isLive;
        this.name = name;
        this.id = Math.random();
        this.icon = icon;
        this.color = color;
    }

    chackMove (cell: Cell) {
        return true
    }

    move(cell: Cell) {

    }

}