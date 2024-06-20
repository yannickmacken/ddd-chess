import { Piece, Rook } from "./classes/entities";
import { Set_, Square } from "./classes/value-objects";

// This file represents the data layer.
export let pieces: { alive: Piece[]; captured: Piece[] } = {
  alive: [
    new Rook(Set_.WHITE, new Square("1", "a"), "1"),
    new Rook(Set_.WHITE, new Square("1", "h"), "2"),
    new Rook(Set_.BLACK, new Square("8", "a"), "3"),
    new Rook(Set_.BLACK, new Square("8", "h"), "4"),
  ],
  captured: [],
};
