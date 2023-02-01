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
    checkXLine: (cell: ICell) => boolean;
    checkYLine: (cell: ICell) => boolean;
    checkDiagonal: (cell: ICell) => boolean;
    checkCell: () => boolean;
    setFigure: (figure: IFigure) => void;
    checkEnemy: (cell: ICell) => boolean;
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

    checkCell () {
        return this.figure === null
    }

    checkEnemy (cell: ICell) {
        if(cell.figure){
            return this.figure?.color !== cell.figure?.color;
        }

        return false;
    }

    checkYLine (cell: ICell) {
        if(this.x !== cell.x) return false;

        const min = Math.min(this.y, cell.y);
        const max = Math.max(this.y, cell.y);

        for(let i = min + 1; i < max; i++) {
            if(!this.board.getCell(this.x, i).checkCell()) return false
        }

        return true
    }   

    checkXLine (cell: ICell) {
        if(this.y !== cell.y) return false;

        const min = Math.min(this.x, cell.x);
        const max = Math.max(this.x, cell.x);

        for(let i = min + 1; i < max; i++) {
            if(!this.board.getCell(i, this.y).checkCell()) return false
        }

        return true
    }

    checkDiagonal (cell: ICell) {
        const absX = Math.abs(cell.x - this.x);
        const absY = Math.abs(cell.y - this.y);
        if(absX !== absY) return false;

        const dy = this.y < cell.y ? 1 : -1;
        const dx = this.x < cell.x ? 1 : -1;

        for(let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx * i, this.y + dy * i).checkCell()) return false
        }

        return true

    }

    setFigure(figure: IFigure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    move(cell: ICell){
        if(this.figure && this.figure.checkMove(cell)){
            const canMove = this.figure.move(cell)
            cell.setFigure(this.figure)
            this.figure = null;
        }
    }
}