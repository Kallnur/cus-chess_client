import { IBoard } from "./model-board";
import { IFigure } from "./model-figure";

export enum Colors {
    WHITE = "white",
    BLACK = "black"
}

export interface ICell {
    x: number;
    y: number;
    color: Colors;
    board: IBoard;
    figure: IFigure | null;
    id: number
}

export class ModelCell implements ICell {
    readonly x;
    readonly y;
    readonly color;
    id;
    board;
    figure

    constructor(board: IBoard, x: number, y: number, color: Colors, figure: IFigure | null) {
        this.id = x + y;
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.figure = figure
    }
}