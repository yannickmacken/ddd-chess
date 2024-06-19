import { Piece } from "./classes/entities";
import { pieces } from "./data";

export class PieceRepository {
  static getById(id: string): Piece | undefined {
    return pieces.alive.filter((piece: Piece) => piece.id === id)[0];
  }

  static getByName(name: string): Piece[] {
    return pieces.alive.filter((piece: Piece) => piece.name === name);
  }

  static getAll(): Piece[] {
    return pieces.alive;
  }

  static remove(id: string) {
    const piece = this.getById(id);
    piece && pieces.captured.push(piece);
    pieces.alive = pieces.alive.filter((piece: Piece) => {
      piece.id !== id;
    });
  }

  static add(item: Piece) {
    pieces.alive.push(item);
  }
}

export class MoveRepository {}
