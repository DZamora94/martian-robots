import { Position } from '../models/martian.model';
import { Grid } from './grid';
import { Robot } from './robot';

describe('Robot', () => {
  it('can load instance', () => {
    const position: Position = {
      xCoordinate: 1,
      yCoordinate: 1,
      orientation: 'N',
    };
    const robot = new Robot({ ...position });

    expect(robot).toBeTruthy();
    expect(robot.position).toEqual(position);
    expect(robot.isLost).toEqual(false);
  });

  describe('turnLeft Method', () => {
    it('N orientation returns W orientation', () => {
      const position: Position = {
        xCoordinate: 1,
        yCoordinate: 1,
        orientation: 'N',
      };
      const robot = new Robot({ ...position });
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('L', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('L', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('L', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('L', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('R', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('R', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('R', grid);

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
      const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

      const newPosition = robot.manageInstruction('R', grid);

      expect(robot.position).toEqual(newPosition);
      expect(position).not.toEqual(newPosition);
    });
  });

  describe('moveForward Method', () => {
    describe('Inside the grid', () => {
      it('N orientation returns (y + 1) coordinate', () => {
        const position: Position = {
          xCoordinate: 1,
          yCoordinate: 1,
          orientation: 'N',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

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
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

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
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

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
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

        expect(robot.position).toEqual(newPosition);
        expect(position).not.toEqual(newPosition);
      });
    });

    describe('Outside the grid without scent', () => {
      it(`N orientation returns same position and true isLost flag`, () => {
        const position: Position = {
          xCoordinate: 1,
          yCoordinate: 3,
          orientation: 'N',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(true);
      });

      it(`S orientation returns same position and true isLost flag`, () => {
        const position: Position = {
          xCoordinate: 1,
          yCoordinate: 0,
          orientation: 'S',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(true);
      });

      it(`E orientation returns same position and true isLost flag`, () => {
        const position: Position = {
          xCoordinate: 3,
          yCoordinate: 1,
          orientation: 'E',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(true);
      });

      it(`W orientation returns same position and true isLost flag`, () => {
        const position: Position = {
          xCoordinate: 0,
          yCoordinate: 1,
          orientation: 'W',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(true);
      });
    });

    describe('Outside the grid with scent', () => {
      it(`N orientation returns same position and false isLost flag`, () => {
        const position: Position = {
          xCoordinate: 1,
          yCoordinate: 3,
          orientation: 'N',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
        grid.scentPositions = [
          {
            xCoordinate: position.xCoordinate,
            yCoordinate: position.yCoordinate,
          },
        ];

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(false);
      });

      it(`S orientation returns same position and false isLost flag`, () => {
        const position: Position = {
          xCoordinate: 1,
          yCoordinate: 0,
          orientation: 'S',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
        grid.scentPositions = [
          {
            xCoordinate: position.xCoordinate,
            yCoordinate: position.yCoordinate,
          },
        ];

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(false);
      });

      it(`E orientation returns same position and false isLost flag`, () => {
        const position: Position = {
          xCoordinate: 3,
          yCoordinate: 1,
          orientation: 'E',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
        grid.scentPositions = [
          {
            xCoordinate: position.xCoordinate,
            yCoordinate: position.yCoordinate,
          },
        ];

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(false);
      });

      it(`W orientation returns same position and false isLost flag`, () => {
        const position: Position = {
          xCoordinate: 0,
          yCoordinate: 1,
          orientation: 'W',
        };
        const robot = new Robot({ ...position });
        const grid = new Grid({ xCoordinate: 3, yCoordinate: 3 });
        grid.scentPositions = [
          {
            xCoordinate: position.xCoordinate,
            yCoordinate: position.yCoordinate,
          },
        ];

        const newPosition = robot.manageInstruction('F', grid);

        expect(position).toEqual(newPosition);
        expect(robot.isLost).toBe(false);
      });
    });
  });
});
