import { Bishop } from "./figures/bishop";
import { King } from "./figures/king";
import { Knight } from "./figures/knight";
import { Pawn } from "./figures/pawn";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";
import { ICell, Colors, ModelCell } from "./model-cell";
import { IFigure } from "./model-figure";

export interface IBoard {
    cells: ICell[][];
}

export class ModelBoard implements IBoard {
    private _isX = ["a", "b", "c", "d", "e", "f", "g", "h"];
    private _isY = ["1", "2", "3", "4", "5", "6", "7", "8"];
    cells: ICell[][] = [];

    initCells () {
        for(let i = 0; i < 8; i++){
            const row: ICell[] = [];
            for(let j = 0; j < 8; j++){
                const newCell = new ModelCell(this, j, i, (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE, null)
                row.push(newCell)
            }
            this.cells.push(row)
        }
    }
}