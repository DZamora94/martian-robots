import { Coordinates } from '../models/martian.model';

export class Grid {
  public gridLimits: Coordinates;
  public scentPositions: Coordinates[] = [];

  constructor(gridLimits: Coordinates) {
    this.gridLimits = gridLimits;
  }

  public findScentInPosition(position: Coordinates): Coordinates | undefined {
    return this.scentPositions.find(
      (scentPosition) =>
        scentPosition.xCoordinate == position.xCoordinate &&
        scentPosition.yCoordinate == position.yCoordinate
    );
  }
}
