import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 't-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article {
      border: 1px solid black;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}