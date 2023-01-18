import { Cell, Colors } from "./model-cell";
import { IFigure } from "./model-figure";

export class Board {
    private _isX = ["a", "b", "c", "d", "e", "f", "g", "h"];
    private _isY = ["1", "2", "3", "4", "5", "6", "7", "8"];
    cells: Cell[][] = [];

    initCells () {
        for(let i = 0; i < 8; i++){
            const row: Cell[] = [];
            for(let j = 0; j < 8; j++){
                const newCell = new Cell(this, i, j, (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE, null)
            }
            this.cells.push(row)
        }
    }

    private toStartPosition () {

    }

    toStep () {

    }

    checkFiled() {

    }

    

}