export enum Set_ {
  BLACK = "black",
  WHITE = "white",
}

export class Rank {
  readonly name: string;
  readonly number: number;
  constructor(name: string) {
    this.name = name;
    this.number = parseInt(name);
    if (this.number < 1 || this.number > 8) {
      throw new Error("Invalid rank name");
    }
  }
}

export class File_ {
  readonly name: string;
  readonly number: number;
  constructor(name: string) {
    this.name = name;
    this.number = name.charCodeAt(0) - 96;
    if (this.number < 1 || this.number > 8) {
      throw new Error("Invalid file name");
    }
  }
}

export class Square {
  readonly rank: Rank;
  readonly file: File_;
  constructor(rank: string, file: string) {
    this.rank = new Rank(rank);
    this.file = new File_(file);
  }
}
