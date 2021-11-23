import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SuperJssModule } from 'super-jss';
import { PaperComponent } from './paper/paper.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SuperJssModule],
  declarations: [AppComponent, HelloComponent, PaperComponent, SelectorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
