import { Position, Robot } from './robot';

describe('Robot', () => {
  it('can load instance', () => {
    const position: Position = {
      xCoordinate: 1,
      yCoordinate: 1,
      orientation: 'N',
    };
    const robot = new Robot({ ...position });

    expect(robot).toBeTruthy();
  });

  describe('turnLeft Method', () => {
    it('N orientation returns W orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'N',
      };

      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('L');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('S orientation returns E orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'S',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('L');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('E orientation returns N orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'E',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('L');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('W orientation returns S orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'W',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('L');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });
  });

  describe('turnRight method', () => {
    it('N orientation returns E orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'N',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('R');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('S orientation returns W orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'S',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('R');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('E orientation returns S orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'E',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('R');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('W orientation returns N orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'W',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('R');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });
  });

  describe('moveForward Method', () => {
    it('N orientation returns (y + 1) coordinate', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'N',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('F');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('S orientation returns (y - 1) coordinate', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'S',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('F');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('E orientation returns (x + 1) coordinate', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'E',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('F');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });

    it('W orientation returns (x - 1) coordinate', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'W',
      };
      const robot = new Robot({ ...position });

      const newPosition = robot.manageInstruction('F');

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });
  });
});
