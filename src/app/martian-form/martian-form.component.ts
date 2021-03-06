import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grid } from '../../app/classes/grid';
import { Robot } from '../classes/robot';
import {
  MartianCommandForm,
  Orientation,
  Instruction,
} from '../models/martian.model';

@Component({
  selector: 'app-martian-form',
  templateUrl: './martian-form.component.html',
  styleUrls: ['./martian-form.component.scss'],
})
export class MartianFormComponent implements OnInit {
  public martianForm?: FormGroup;

  public outputCommands: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.martianForm = this.formBuilder.group({
      gridDimensions: [
        null,
        [Validators.required, Validators.pattern(/^\d{1,2} \d{1,2}$/)],
      ],
      robotCommand: [null, Validators.required],
    });
  }

  public submitForm() {
    this.outputCommands = [];

    const fullCommand: MartianCommandForm = this.martianForm?.value;

    const grid = this.createGrid(fullCommand.gridDimensions);
    this.manageRobotCommands(fullCommand.robotCommand, grid);
  }

  private createGrid(gridDimensions: string): Grid {
    // Grid dimensions on an array
    const gridDimensionsArray = (gridDimensions as string).split(' ');
    // Create Grid with dimensions array
    return new Grid({
      xCoordinate: parseInt(gridDimensionsArray[0]),
      yCoordinate: parseInt(gridDimensionsArray[1]),
    });
  }

  private manageRobotCommands(command: string, grid: Grid) {
    // Each robot command on an element of the array
    const robotsCommandArray = (command as string).split('\n\n');

    // Loop for each robot command
    robotsCommandArray.forEach((robotCommandValue) => {
      const robotCommand = robotCommandValue.split('\n');
      const robot = this.createRobot(robotCommand[0]);

      this.manageInstructions(robot, robotCommand[1], grid);

      this.buildOutput(robot);
    });
  }

  private createRobot(position: string): Robot {
    // Position coordenates and orientation of the Robot in an array
    const robotInitPositionArray = position.split(' ');
    // Create new Robot with coordinates and orientation array
    return new Robot({
      xCoordinate: parseInt(robotInitPositionArray[0]),
      yCoordinate: parseInt(robotInitPositionArray[1]),
      orientation: robotInitPositionArray[2] as Orientation,
    });
  }

  private manageInstructions(robot: Robot, instructions: string, grid: Grid) {
    // Each instruction for the Robot as an element of an array
    const robotInstructionArray = instructions.split('');

    // For loop with the instructions array
    for (let index = 0; index < robotInstructionArray.length; index++) {
      const instruction = robotInstructionArray[index];
      // If Robot is not lost, continue the loop, if not, break it
      if (!robot.isLost) {
        robot.manageInstruction(instruction as Instruction, grid);
      } else {
        break;
      }
    }
  }

  private buildOutput(robot: Robot) {
    let finalPosition = `${robot.position.xCoordinate} ${robot.position.yCoordinate} ${robot.position.orientation}`;
    if (robot.isLost) {
      finalPosition += ' LOST';
    }

    console.log('FINAL POSITION: ', finalPosition);
    this.outputCommands.push(finalPosition);
  }
}
