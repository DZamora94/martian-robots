// Parameters: xCoordinate, yCoordinate, orientation (N,S,E,W)

// Functions: turnLeft, turnRight, moveForward

export type Orientation = 'N' | 'S' | 'E' | 'W';

export class Robot {
  public xCoordinate: number;
  public yCoordinate: number;
  public orientation: Orientation;

  constructor(
    xCoordinate: number,
    yCoordinate: number,
    orientation: Orientation
  ) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.orientation = orientation;
  }

  public turnLeft() {}

  public turnRight() {}

  public moveForward() {}
}
