import { v4 as uuidv4 } from "uuid";
import { Set_, Square } from "./value-objects";

export abstract class Piece {
  readonly id: string;
  readonly set: Set_;
  readonly name: string;
  square: Square;
  protected constructor(name: string, set: Set_, square: Square, id?: string) {
    this.name = name;
    this.set = set;
    this.square = square;
    this.id = id ?? uuidv4();
  }

  abstract move(newSquare: Square): void;

  protected abstract isValidMove(newSquare: Square): boolean;

  protected isPathClear(newSquare: Square): void {}
}

export class Rook extends Piece {
  constructor(set: Set_, square: Square, id?: string) {
    super("Rook", set, square, id);
  }

  move(newSquare: Square) {
    if (!this.isValidMove(newSquare)) {
      throw new Error("Invalid move");
    }
    this.square = newSquare;
  }

  isValidMove(newSquare: Square) {
    return (
      this.square.rank.name === newSquare.rank.name ||
      this.square.file.name === newSquare.file.name
    );
  }
}
