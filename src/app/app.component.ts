import { Component, OnInit, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';
import { flexSelectorsList } from './flexSelectorsData';
import ISelectorResponse from './selector/selector.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  sjFlexDiv: SJss;
  codeMessage: string;
  sjTitle: SJss = { paddingBottom: '0.5rem' };
  cells: Array<number> = [1, 2, 3];

  flexSelectorsList: Array<{ property: string; options: Array<string> }> = flexSelectorsList

  constructor() {}

  ngOnInit() {
    this.sjFlexDiv = {
      display: 'flex',
      height: '200px',
      width: '100%',
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

    this.codeMessage = JSON.stringify(this.sjFlexDiv);
  }
}
