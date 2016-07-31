import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';

@Component({
  moduleId: module.id,
  selector: 't-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent implements OnInit {
  stringInterpolation: String = "This is string interpolation!";
  numberInterpolation: Number = 2;

  constructor() { }

  ngOnInit() {
  }

  public isBackgroundGreen(): Boolean {
    return true;
  }

  public getColor(): String {
    return 'blue';
  }
}
