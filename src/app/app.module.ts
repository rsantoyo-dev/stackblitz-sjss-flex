import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SuperJssModule } from 'super-jss';
import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SuperJssModule],
  declarations: [AppComponent, HelloComponent, BoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
