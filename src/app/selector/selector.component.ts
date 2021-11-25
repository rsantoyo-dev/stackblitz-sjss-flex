import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';
export  interface ISelectorResponse {
  sJssProperty: string;
  sjss: SJss;
}

export  interface ISjssProperty {
  breakpoint: string;
  value: string;
}

@Component({
  selector: 'sjss-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent implements OnInit {
  @Input() options = [];
  @Input() sJssProperty = '';

  @Output() onOptionChange = new EventEmitter<ISelectorResponse>();

  optionSelected: string;

  sjssPropertyByBreakpoint: Array<ISjssProperty> = [
    {breakpoint:'xs', value:''},
    {breakpoint:'sm', value:''},
    {breakpoint:'md', value:''},
    {breakpoint:'lg', value:''},
    {breakpoint:'xl', value:''}
  ]

  constructor() {}

  ngOnInit() {}



  changed() {
    const sjss: SJss = { [this.sJssProperty]: this.optionSelected };
    this.onOptionChange.emit({ sJssProperty: this.sJssProperty, sjss: sjss });
  }
}
