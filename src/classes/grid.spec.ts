import { Grid } from './grid';

describe('Grid', () => {
  it('can load instance', () => {
    const planet = new Grid(3, 3);

    expect(planet).toBeTruthy();
    expect(planet.xGrid).toEqual(3);
    expect(planet.yGrid).toEqual(3);
  });
});
