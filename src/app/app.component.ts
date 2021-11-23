import { Component, OnInit, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';
import ISelectorResponse from './selector/selector.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  sjFlexDiv: SJss;
  sjTitle: SJss = { paddingBottom: '0.5rem' };
  cells: Array<number> = [1, 2, 3];

  flexDirection = ['', 'row', 'row-reverse', 'column', 'column-reverse'];
  flexWrap = ['', 'nowrap', 'wrap', 'wrap-reverse'];

  constructor() {}

  ngOnInit() {
    this.sjFlexDiv = {
      display: 'flex'
    };
  }

  numberChange(e: any) {
    this.cells = [];
    for (let i = 1; i <= e.target.value; i++) {
      this.cells.push(i);
    }
  }

  optionChange(selected: ISelectorResponse) {
    this.sjFlexDiv = { ...this.sjFlexDiv, ...selected.sjss };
    if (selected.sjss[selected.sJssProperty] === '') {
      delete this.sjFlexDiv[selected.sJssProperty];
    }
    console.log(this.sjFlexDiv);
  }

}
