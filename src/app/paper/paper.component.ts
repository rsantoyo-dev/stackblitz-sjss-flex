import { Component, OnInit } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'paper',
  templateUrl: './paper.component.html'
})
export class PaperComponent implements OnInit {

  sjRoot: SJss = {
    backgroundColor: 'rgb(22 175 161)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    margin: '0.25rem',
    borderRadius: '0.25rem'
  };

  constructor() { }

  ngOnInit() {
  }

}