import { Square } from "./value-objects";
import { PieceRepository } from "../repositories";
import { Piece } from "./entities";

export class Position {
  constructor() {}

  movePiece(piece: Piece, newSquare: Square) {
    // Check if the move crosses other pieces
    // Check if Rokade, and if so, switch the Rook and the King
    piece.move(newSquare);
    // Check if the piece slayed another piece
    // Remove the slayed piece from the board
    console.log(
      `Moved ${piece.name} to ${newSquare.rank.name}${newSquare.file.name}`,
    );
  }
}
