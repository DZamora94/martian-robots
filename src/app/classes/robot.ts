import { Position, Instruction, Orientation } from '../models/martian.model';
import { Grid } from './grid';

export class Robot {
  public position: Position;
  public isLost = false;

  constructor(position: Position) {
    this.position = position;
  }

  public manageInstruction(instruction: Instruction, grid: Grid): Position {
    switch (instruction) {
      case 'L':
        this.position.orientation = this.turnLeft(this.position.orientation);
        break;
      case 'R':
        this.position.orientation = this.turnRight(this.position.orientation);
        break;
      case 'F':
        this.position = this.moveForward(this.position, grid);
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

  private moveForward(position: Position, grid: Grid): Position {
    switch (position.orientation) {
      case 'N':
        if (grid.gridLimits.yCoordinate >= position.yCoordinate + 1) {
          position.yCoordinate++;
        } else {
          this.manageOffTheGridMovement(position, grid);
        }
        break;
      case 'S':
        if (position.yCoordinate > 0) {
          position.yCoordinate--;
        } else {
          this.manageOffTheGridMovement(position, grid);
        }
        break;
      case 'E':
        if (grid.gridLimits.xCoordinate >= position.xCoordinate + 1) {
          position.xCoordinate++;
        } else {
          this.manageOffTheGridMovement(position, grid);
        }
        break;
      case 'W':
        if (position.xCoordinate > 0) {
          position.xCoordinate--;
        } else {
          this.manageOffTheGridMovement(position, grid);
        }
        break;
      default:
        throw Error('INVALID POSITION when MOVING FORWARD');
    }
    return position;
  }

  private manageOffTheGridMovement(position: Position, grid: Grid) {
    const isScent = !!grid.findScentInPosition({
      xCoordinate: position.xCoordinate,
      yCoordinate: position.yCoordinate,
    });
    console.log('SCENT FOUND??', isScent);
    if (!isScent) {
      this.isLost = true;
      grid.scentPositions.push({
        xCoordinate: position.xCoordinate,
        yCoordinate: position.yCoordinate,
      });
      console.log(
        'I AM LOST!!, SCENT ADDED IN POSITION: ',
        `${position.xCoordinate} ${position.yCoordinate}`
      );
    }
  }
}
