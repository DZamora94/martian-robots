export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Instruction = 'L' | 'R' | 'F';

export interface Position {
  xCoordinate: number;
  yCoordinate: number;
  orientation: Orientation;
}

export interface ScentPosition {
  xPosition: number;
  yPosition: number;
}

export interface MartianCommandForm {
  gridDimensions: string;
  robotCommand: string;
}
