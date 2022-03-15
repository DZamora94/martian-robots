import { Robot } from './robot';

describe('Robot', () => {
  it('can load instance', () => {
    const robot = new Robot(1, 1, 'N');

    expect(robot).toBeTruthy();
  });

  describe('turnLeft Method', () => {
    it('N orientation returns W orientation', () => {
      const robot = new Robot(1, 1, 'N');

      robot.turnLeft();

      expect(robot.orientation).toEqual('W');
    });

    it('S orientation returns E orientation', () => {
      const robot = new Robot(1, 1, 'S');

      robot.turnLeft();

      expect(robot.orientation).toEqual('E');
    });

    it('E orientation returns N orientation', () => {
      const robot = new Robot(1, 1, 'E');

      robot.turnLeft();

      expect(robot.orientation).toEqual('N');
    });

    it('W orientation returns S orientation', () => {
      const robot = new Robot(1, 1, 'W');

      robot.turnLeft();

      expect(robot.orientation).toEqual('S');
    });
  });

  describe('turnRight Method', () => {
    it('N orientation returns E orientation', () => {
      const robot = new Robot(1, 1, 'N');

      robot.turnRight();

      expect(robot.orientation).toEqual('E');
    });

    it('S orientation returns W orientation', () => {
      const robot = new Robot(1, 1, 'S');

      robot.turnRight();

      expect(robot.orientation).toEqual('W');
    });

    it('E orientation returns S orientation', () => {
      const robot = new Robot(1, 1, 'E');

      robot.turnRight();

      expect(robot.orientation).toEqual('S');
    });

    it('W orientation returns N orientation', () => {
      const robot = new Robot(1, 1, 'W');

      robot.turnRight();

      expect(robot.orientation).toEqual('N');
    });
  });

  describe('moveForward Method', () => {
    it('N orientation returns (y + 1) coordinate', () => {
      const robot = new Robot(1, 1, 'N');

      robot.moveForward();

      expect(robot.yCoordinate).toEqual(2);
    });

    it('S orientation returns (y - 1) coordinate', () => {
      const robot = new Robot(1, 1, 'S');

      robot.moveForward();

      expect(robot.yCoordinate).toEqual(0);
    });

    it('E orientation returns (x + 1) coordinate', () => {
      const robot = new Robot(1, 1, 'E');

      robot.moveForward();

      expect(robot.xCoordinate).toEqual(2);
    });

    it('W orientation returns (x - 1) coordinate', () => {
      const robot = new Robot(1, 1, 'W');

      robot.moveForward();

      expect(robot.xCoordinate).toEqual(0);
    });
  });
});
