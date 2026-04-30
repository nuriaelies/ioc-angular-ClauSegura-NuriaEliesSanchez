import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementCardComponent {
  @Input() element: any;
}
