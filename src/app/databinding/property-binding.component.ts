import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 't-property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `
})
export class PropertyBindingComponent implements OnInit {
  @Input() result: number;

  constructor() { }

  ngOnInit() {
  }

}
