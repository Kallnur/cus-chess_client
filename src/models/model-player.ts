import { Colors } from "./model-cell"

export interface IPlayer {
    color: Colors
}

export class Player implements IPlayer {
    color;

    constructor(color: Colors){
        this.color = color;
    }
}