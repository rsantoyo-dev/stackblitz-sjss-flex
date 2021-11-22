import { Component, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
})

export class BoxComponent {
  sjRoot: SJss = {
    backgroundColor: 'rgb(22 175 161)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    margin: '0.25rem',
    borderRadius: '0.25rem'
  };
}
