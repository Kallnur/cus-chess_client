import { Board } from "./model-board";
import { IFigure } from "./model-figure";

export enum Colors {
    WHITE = "white",
    BLACK = "black"
}

export interface Cell {
    x: number;
    y: number;
    color: Colors;
    board: Board;
    figure: IFigure | null;
    id: number
}

export class Cell implements Cell {
    x;
    y;
    color;
    id;
    board;

    constructor(board: Board, x: number, y: number, color: Colors, figure: IFigure | null) {
        this.id = x + y;
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.figure = figure
    }
}