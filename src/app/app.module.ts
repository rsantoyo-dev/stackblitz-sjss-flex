import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SuperJssModule } from 'super-jss';
import { BoxComponent } from './box/box.component';
import { PaperComponent } from './paper/paper.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SuperJssModule],
  declarations: [AppComponent, HelloComponent, BoxComponent, PaperComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
