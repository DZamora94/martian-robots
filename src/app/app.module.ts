import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MartianFormModule } from './martian-form/martian-form.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MartianFormModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
