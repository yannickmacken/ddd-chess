import { Square } from "./value-objects";
import { PieceRepository } from "../repositories";

export class Position {
  constructor() {}

  movePiece(id: string, newSquare: Square) {
    // Check if the move crosses other pieces
    // Check if Rokade, and if so, switch the Rook and the King
    const piece = PieceRepository.getById(id);
    if (!piece) {
      throw new Error("Piece not found");
    }
    piece.move(newSquare);
    // Check if the piece slayed another piece
    // Remove the slayed piece from the board
    console.log(
      `Moved ${piece.name} to ${newSquare.rank.name}${newSquare.file.name}`,
    );
  }
}
