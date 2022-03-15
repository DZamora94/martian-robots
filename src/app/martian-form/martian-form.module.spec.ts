import { TestBed } from '@angular/core/testing';
import { MartianFormModule } from './martian-form.module';

describe('MartianFormModule', () => {
  let pipe: MartianFormModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MartianFormModule] });
    pipe = TestBed.inject(MartianFormModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
