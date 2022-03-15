import { Grid } from './grid';

describe('Grid', () => {
  it('can load instance', () => {
    const grid = new Grid(3, 3);

    expect(grid).toBeTruthy();
    expect(grid.xGrid).toEqual(3);
    expect(grid.yGrid).toEqual(3);
  });
});
