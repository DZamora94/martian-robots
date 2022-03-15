export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Instruction = 'L' | 'R' | 'F';

export interface Position extends Coordinates {
  orientation: Orientation;
}

export interface Coordinates {
  xCoordinate: number;
  yCoordinate: number;
}

export interface MartianCommandForm {
  gridDimensions: string;
  robotCommand: string;
}
