import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MartianCommandForm,
  MartianFormComponent,
} from './martian-form.component';

describe('MartianFormComponent', () => {
  let component: MartianFormComponent;
  let fixture: ComponentFixture<MartianFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MartianFormComponent],
      providers: [FormBuilder],
    });
    fixture = TestBed.createComponent(MartianFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('initForm Method', () => {
    it('martianForm variable has value', () => {
      fixture.detectChanges();

      expect(component.martianForm).toBeTruthy();
      expect(component.martianForm?.value).toBeTruthy();
      expect(component.martianForm?.valid).toBeFalse();
      expect(component.martianForm?.value.planetDimensions).toBe(null);
      expect(component.martianForm?.value.robotCommand).toBe(null);
    });
  });

  describe('submitForm Method', () => {
    it('red Badger test input', () => {
      const command =
        '1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL';
      const expectedOutput = ['1 1 E', '3 3 N LOST', '2 3 S'];
      const formValue: MartianCommandForm = {
        gridDimensions: '5 3',
        robotCommand: command,
      };

      fixture.detectChanges();
      component.martianForm?.patchValue(formValue);
      component.submitForm();

      expect(component.outputCommands).toEqual(expectedOutput);
    });

    it('other test input', () => {
      const command =
        '1 1 N\nFFFFFF\n\n1 1 N\nLFFFFFF\n\n1 1 N\nLLFFFFF\n\n1 1 N\nLLLFFFF\n\n1 1 N\nFFFFFF\n\n1 1 N\nLFFFFFF\n\n1 1 N\nLLFFFFF\n\n1 1 N\nLLLFFFFFF';
      const expectedOutput = [
        '1 3 N LOST',
        '0 1 W LOST',
        '1 0 S LOST',
        '5 1 E',
        '1 3 N',
        '0 1 W',
        '1 0 S',
        '5 1 E LOST',
      ];
      const formValue: MartianCommandForm = {
        gridDimensions: '5 3',
        robotCommand: command,
      };

      fixture.detectChanges();
      component.martianForm?.patchValue(formValue);
      component.submitForm();

      expect(component.outputCommands).toEqual(expectedOutput);
    });
  });
});
