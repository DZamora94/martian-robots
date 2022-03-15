import { Coordinates } from '../models/martian.model';
import { Grid } from './grid';

describe('Grid', () => {
  it('can load instance', () => {
    const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

    expect(grid).toBeTruthy();
    expect(grid.gridLimits.xCoordinate).toEqual(3);
    expect(grid.gridLimits.yCoordinate).toEqual(3);
  });

  describe('findScentInPosition method', () => {
    it('scent in that position', () => {
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
      const scentPosition: Coordinates = { xCoordinate: 3, yCoordinate: 0 };

      grid.scentPositions = [scentPosition];
      const result = grid.findScentInPosition(scentPosition);

      expect(result).toEqual(scentPosition);
    });

    it('no scent in that position', () => {
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
      const scentPosition: Coordinates = { xCoordinate: 3, yCoordinate: 0 };

      const result = grid.findScentInPosition(scentPosition);

      expect(result).toEqual(undefined);
    });
  });
});
