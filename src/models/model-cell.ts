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
    id: number;
    available: boolean;
    move: (cell: ICell) => void;
}

export class ModelCell implements ICell {
    readonly x;
    readonly y;
    readonly color;
    id;
    board;
    figure;
    available;

    constructor(board: IBoard, x: number, y: number, color: Colors, figure: IFigure | null) {
        this.id = x + y;
        this.x = x;
        this.y = y;
        this.board = board;
        this.color = color;
        this.figure = figure;
        this.available = false
    }

    move(cell: ICell){
        if(this.figure && this.figure.checkMove(cell)){
            this.figure.move(cell);
            cell.figure = this.figure;
            this.figure = null;
        }
    }
}