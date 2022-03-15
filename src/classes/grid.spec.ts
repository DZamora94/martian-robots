import { Grid, ScentPosition } from './grid';

describe('Grid', () => {
  it('can load instance', () => {
    const grid = new Grid(3, 3);

    expect(grid).toBeTruthy();
    expect(grid.xGrid).toEqual(3);
    expect(grid.yGrid).toEqual(3);
  });

  describe('findScentInPosition method', () => {
    it('scent in that position', () => {
      const grid = new Grid(3, 3);
      const scentPosition: ScentPosition = { xPosition: 3, yPosition: 0 };

      grid.scentPositions = [scentPosition];
      const result = grid.findScentInPosition(scentPosition);

      expect(result).toEqual(scentPosition);
    });

    it('no scent in that position', () => {
      const grid = new Grid(3, 3);
      const scentPosition: ScentPosition = { xPosition: 3, yPosition: 0 };

      const result = grid.findScentInPosition(scentPosition);

      expect(result).toEqual(undefined);
    });
  });
});
