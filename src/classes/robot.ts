// Parameters: xCoordinate, yCoordinate, orientation (N,S,E,W)

// Functions: turnLeft, turnRight, moveForward

export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Instruction = 'L' | 'R' | 'F';

export interface Position {
  xCoordinate: number;
  yCoordinate: number;
  orientation: Orientation;
}

export class Robot {
  public position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  public manageInstruction(instruction: Instruction): Position {
    switch (instruction) {
      case 'L':
        this.position.orientation = this.turnLeft(this.position.orientation);
        break;
      case 'R':
        this.position.orientation = this.turnRight(this.position.orientation);
        break;
      case 'F':
        this.position = this.moveForward(this.position);
        break;
      default:
        throw Error('INVALID INSTRUCTION');
    }
    return this.position;
  }

  private turnLeft(orientation: Orientation): Orientation {
    let newOrientation: Orientation;
    switch (orientation) {
      case 'N':
        newOrientation = 'W';
        break;
      case 'S':
        newOrientation = 'E';
        break;
      case 'E':
        newOrientation = 'N';
        break;
      case 'W':
        newOrientation = 'S';
        break;
      default:
        newOrientation = orientation;
        throw Error('INVALID POSITION when TURNING LEFT');
    }
    return newOrientation;
  }

  private turnRight(orientation: Orientation): Orientation {
    let newOrientation: Orientation;
    switch (orientation) {
      case 'N':
        newOrientation = 'E';
        break;
      case 'S':
        newOrientation = 'W';
        break;
      case 'E':
        newOrientation = 'S';
        break;
      case 'W':
        newOrientation = 'N';
        break;
      default:
        newOrientation = orientation;
        throw Error('INVALID POSITION when TURNING RIGHT');
    }
    return newOrientation;
  }

  private moveForward(position: Position): Position {
    switch (position.orientation) {
      case 'N':
        position.yCoordinate++;
        break;
      case 'S':
        position.yCoordinate--;
        break;
      case 'E':
        position.xCoordinate++;
        break;
      case 'W':
        position.xCoordinate--;
        break;
      default:
        throw Error('INVALID POSITION when MOVING FORWARD');
    }
    return position;
  }
}
