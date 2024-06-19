// Value Object
class Rank {
    readonly name: string;
    readonly number: number;
    constructor(name: string) {
        this.name = name;
        this.number = parseInt(name);
    }
}

// Value Object
class File_ {
    readonly name: string;
    readonly number: number;
    constructor(name: string) {
        this.name = name;
        this.number = name.charCodeAt(0) - 96;
    }
}

// Value Object
class Square {
    readonly rank: Rank;
    readonly file: File_;
    constructor(row: Rank, column: File_) {
        this.rank = row;
        this.file = column;
    }
}

// Abstract Entity
abstract class Piece {
    readonly name: string;
    square: Square;
    constructor(name: string, square: Square) {
        this.name = name;
        this.square = square;
    }

    abstract move(newSquare: Square, position: Position): void;

    protected abstract isValidMove(newSquare: Square): boolean;

    protected isPathClear(newSquare: Square, position: Position): void {}
}

// Concrete Entity
class Rook extends Piece {
    constructor(square: Square) {
        super('Rook', square);
    }

    move(newSquare: Square) {
        if (!this.isValidMove(newSquare)) {
            throw new Error('Invalid move');
        }
        this.square = newSquare;
    }

    isValidMove(newSquare: Square) {
        return this.square.rank.name === newSquare.rank.name || this.square.file.name === newSquare.file.name;
    }
}

// Aggregate
class Position {
    pieces: Piece[] = [];
    constructor() {
        this.pieces.push(new Rook(new Square(new Rank('1'), new File_('a'))));
    }

    movePiece(piece: Piece, newSquare: Square) {
        // Check if the move crosses other pieces
        // Check if Rokade, and if so, switch the Rook and the King
        piece.move(newSquare, this);
        // Check if the piece slayed another piece
        // Remove the slayed piece from the board
        console.log(`Moved ${piece.name} to ${newSquare.rank.name}${newSquare.file.name}`);
    }
}

const position = new Position();
position.movePiece(position.pieces[0], new Square(new Rank('4'), new File_('a')));