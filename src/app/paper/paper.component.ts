import { Component, Input, OnInit } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'paper',
  templateUrl: './paper.component.html'
})
export class PaperComponent implements OnInit {

  sjRoot: SJss;
  @Input() bgColor:string = 'rgb(22 175 161)'

  constructor() { }

  ngOnInit() {
    this.sjRoot = {
      backgroundColor: this.bgColor,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      margin: '0.25rem',
      borderRadius: '0.25rem'
    };
  }

}