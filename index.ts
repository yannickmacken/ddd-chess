import { Square } from "./classes/value-objects";
import { Position } from "./classes/aggregates";
import { PieceRepository } from "./repositories";

// This file represents the command handler
const position = new Position();
let piece = PieceRepository.getById("1");
if (!piece) {
  throw new Error("Piece not found");
}
position.movePiece(piece, new Square("4", "a"));
piece = PieceRepository.getById("2");
if (!piece) {
  throw new Error("Piece not found");
}
position.movePiece(piece, new Square("4", "h"));
