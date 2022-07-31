import { Component, Input, OnInit } from '@angular/core';
import { SuperJssService } from 'super-jss';
import { SJssTheme, SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'paper',
  templateUrl: './paper.component.html'
})
export class PaperComponent implements OnInit {

  sjRoot: SJss;
  @Input() bgColor:string;
  @Input() justifyContent:string
  @Input() flexDirection:string

  theme:SJssTheme
  constructor(private js:SuperJssService) {
    this.theme = js.theme;
    this.bgColor = this.theme.palette.primary.main
  }

  ngOnInit() {
    this.sjRoot = {
      backgroundColor: this.bgColor,
      color: this.theme.palette.primary.contrastText,
      display: 'flex',
      justifyContent: this.justifyContent,
      flexDirection: this.flexDirection,
      padding: this.theme.spacing(2),
      margin:  this.theme.spacing(1),
      borderRadius: this.theme.spacing(1)
    };
  }

}