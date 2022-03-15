import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-martian-form',
  templateUrl: './martian-form.component.html',
  styleUrls: ['./martian-form.component.scss'],
})
export class MartianFormComponent implements OnInit {
  public martianForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.martianForm = this.formBuilder.group({
      gridDimensions: [null, Validators.required],
      robotCommand: [null, Validators.required],
    });
  }

  public submitForm() {
    console.log(this.martianForm?.value);
  }
}
