import { Component, Input } from '@angular/core';

@Component({
  selector: 'targeta-element',
  standalone: true,
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element: any;
}
