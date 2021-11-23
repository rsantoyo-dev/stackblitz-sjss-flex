import { Component, OnInit, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  sjFlexDiv:SJss;
  sjTitle: SJss = { paddingBottom: '0.5rem' };
  cells:Array<number>=[1,2,3]

  flexDirectionSelected:string;
  flexDirection = [
    { value: 'row', name: 'row' },
    { value: 'row-reverse', name: 'row-reverse' },
    { value: 'column', name: 'column' },
    { value: 'column-reverse', name: 'column-reverse' },
  ];

  flexWrapSelected:string;
  flexWrap = [
    { value: 'nowrap', name: 'nowrap ' },
    { value: 'wrap', name: 'wrap' },
    { value: 'wrap-reverse', name: 'wrap-reverse' },
  ];

  

 

  constructor(){

  }

  ngOnInit() {
    this.sjFlexDiv = {
      display: 'flex',
      flexWrap: 'wrap'
    };
  }

  numberChange(e:any){
    this.cells = []
    for(let i=1; i<=e.target.value; i++){
      this.cells.push(i)
    }  
  }


  changed() {        
    this.sjFlexDiv = {...this.sjFlexDiv, flexDirection: this.flexDirectionSelected };
    if(this.flexDirectionSelected === ""){
      delete this.sjFlexDiv.flexDirection
    }
    console.log(this.sjFlexDiv)
  }
  
  changedWrap() {    
    this.sjFlexDiv = {...this.sjFlexDiv, flexWrap: this.flexWrapSelected };
    if(this.flexWrapSelected === ""){
      delete this.sjFlexDiv.flexWrap
    }
    console.log(this.sjFlexDiv)
  }
}
