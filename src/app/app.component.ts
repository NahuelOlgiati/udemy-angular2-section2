import { Component } from '@angular/core';
import { OtherComponent, AnotherComponent } from './other';

@Component({
  moduleId: module.id,
  selector: 't-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent]
})
export class AppComponent {
  title = 'app works!';
}