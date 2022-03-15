import { ScentPosition } from '../models/martian.model';

export class Grid {
  public xGrid: number;
  public yGrid: number;
  public scentPositions: ScentPosition[] = [];

  constructor(xGrid: number, yGrid: number) {
    this.xGrid = xGrid;
    this.yGrid = yGrid;
  }

  public findScentInPosition(
    position: ScentPosition
  ): ScentPosition | undefined {
    return this.scentPositions.find(
      (scentPosition) =>
        scentPosition.xPosition == position.xPosition &&
        scentPosition.yPosition == position.yPosition
    );
  }
}
