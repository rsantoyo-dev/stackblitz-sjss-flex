import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreakingStyle, SJss } from 'super-jss/lib/super-jss-model';
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

  optionSelected: Map<string, string> = new Map<string, string>();;

  sjssPropertyByBreakpoint: Array<ISjssProperty> = [
    {breakpoint:'xs', value:''},
    {breakpoint:'sm', value:''},
    {breakpoint:'md', value:''},
    {breakpoint:'lg', value:''},
    {breakpoint:'xl', value:''}
  ]

  constructor() {}

  ngOnInit() {}



  changed(sJssProperty:ISjssProperty) {
    
    let breakingStyle: IBreakingStyle ={}

    this.sjssPropertyByBreakpoint.forEach(x=>{     
      if(this.optionSelected[x.breakpoint]){
        breakingStyle = {...breakingStyle, [x.breakpoint]: this.optionSelected[x.breakpoint]}
      }     
    })
    let sjss: SJss = { [this.sJssProperty]: breakingStyle };
    if(Object.keys(breakingStyle).length === 1 && Object.keys(breakingStyle)[0]==='xs')
    {
      sjss = { [this.sJssProperty]: this.optionSelected['xs'] }; 
    }
    this.onOptionChange.emit({ sJssProperty: this.sJssProperty, sjss: sjss })

  }
}
