import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export default interface ISelectorComponent {
  value: string;
  name: string;
}

@Component({
  selector: 'sjss-selector',
  templateUrl: './selector.component.html',
})
export class SelectorComponent implements OnInit {
  @Input() options = [];

  @Output() onOptionChange = new EventEmitter<string>();

  optionSelected: string;

  constructor() {}

  ngOnInit() {}

  changed() {
    this.onOptionChange.emit(this.optionSelected);
  }
}
