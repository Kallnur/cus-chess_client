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
    highlightCells: (cell: ICell | null) => void;
    getCopy: () => IBoard;
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

    public getCell(x: number, y: number) {
      return this.cells[y][x]
    }

    public getCopy () {
        const newBoard = new ModelBoard();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public highlightCells (selectedCell: ICell | null) {
        for(let i = 0; i < this.cells.length; i++){
            const row = this.cells[i];
            for(let j = 0; j < row.length; j++){
                row[j].available = !!selectedCell?.figure?.checkMove(row[j])
            }
        }
    }

    private lineUpWhites () {
        for (let i = 0; i < 8; i++) {
          new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
        new King(Colors.WHITE, this.getCell(4, 7))
        new Queen(Colors.WHITE, this.getCell(3, 7))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }

    private lineUpBlacks () {
        for (let i = 0; i < 8; i++) {
          new Pawn(Colors.BLACK, this.getCell(i, 1))
        }
        new King(Colors.BLACK, this.getCell(4, 0))
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
    }
  
    // public addFisherFigures() {
    //
    // }
  
    public lineUpFigures() {
        this.lineUpWhites()
        this.lineUpBlacks()
    }
}