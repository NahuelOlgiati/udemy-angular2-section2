import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 't-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}