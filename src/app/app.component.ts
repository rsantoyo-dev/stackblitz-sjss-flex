import { Component, OnInit, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  sjTitle: SJss = { paddingBottom: '0.5rem' };

  flexDirection = [
    { value: 'row', name: 'row' },
    { value: 'row-reverse', name: 'row-reverse' },
    { value: 'column', name: 'column' },
    { value: 'column-reverse', name: 'column-reverse' },
  ];
  selectedOption:string;

  sjFlexDiv:SJss

  constructor(){

  }

  ngOnInit() {
    this.sjFlexDiv = {
      display: 'flex',
      flexDirection: this.selectedOption
    };
  }


  changed() {
    console.log(this.selectedOption);
    this.sjFlexDiv = {
      display: 'flex',
      flexDirection: this.selectedOption
    };
  }
}
