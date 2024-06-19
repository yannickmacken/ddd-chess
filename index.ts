import { Square } from "./classes/value-objects";
import { Position } from "./classes/aggregates";

const position = new Position();
position.movePiece("1", new Square("4", "a"));
position.movePiece("2", new Square("4", "h"));
